from flask import Flask, request, abort, jsonify
from flask_cors import CORS
from populate import populate_db
from model import *
import logging
from logging import Formatter, FileHandler
from database import init_db,db

#configure application
app = Flask(__name__)
app.config.from_object('config')
init_db(app)

@app.cli.command("reset-db")
def reset_db():
    db.drop_all()
    db.create_all()
    print('Database has been reset')

@app.cli.command("populate-db")
def populate_db_cli():
    with app.app_context():
        populate_db()

CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.after_request
def after_request(response):
    response.headers.add(
        "Access-Control-Allow-Headers", "Content-Type, Authorization"
    )
    response.headers.add(
        "Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTION"
    )
    response.headers.add(
        "Access-Control-Allow-Origin", "*"
    )
    return response


@app.route('/', methods=['GET'] )
def home_page():
    return 'Hello world! This is an API created by Nneka Sandra to send experiment data to the frontend'
  
# Retrieves data for an experiment structure instance
@app.route('/experiment/<int:experiment_id>')
def experiment_template(experiment_id):
    experiment_template = ExperimentStructure.query.get_or_404(experiment_id).format()
    if experiment_template is None:
        abort(404)
    return jsonify({
        'success': True,
        'total_experiments': len(ExperimentStructure.query.all()),
        'title': experiment_template['title'],
        'aim': experiment_template['aim'],
        'theory': experiment_template['theory'],
        'apparatus': experiment_template['apparatus'],
        'procedure': experiment_template['procedure'],
        'result_discussion': experiment_template['result_discussion'],
        'conclusion': experiment_template['conclusion'],
        'precautions': experiment_template['precautions']
    })

# Retrieves table field data for an experiment structure instance
@app.route('/experiment-table/<int:experiment_id>')
def table_data(experiment_id):
  if request.method =="GET":
    experiment_template = ExperimentStructure.query.get_or_404(experiment_id) # columns definition
    experiment_template_table = experiment_template.data_fields
    data = [item.format() for item in experiment_template_table]
   
    result = [item.get("field_name") for item in data ]  
    return jsonify({
        'fieldnames': result
    }) 


# Creates Experiment instance from experiment structure
@app.route('/experiment', methods=['POST'])
def create_experiment():
    data = request.get_json()
    new_title = data.get('title')
    new_aim = data.get('aim')
    new_theory = data.get('theory')
    new_apparatus = data.get('apparatus')
    new_procedure = data.get('procedure')
    new_discussion = data.get('result_discussion')
    new_conclusion = data.get('conclusion')
    new_precaution = data.get('precaution')
    try:
        experiment = Experiment(
            title = new_title,
            aim = new_aim,
            theory = new_theory,
            apparatus = new_apparatus,
            procedure = new_procedure,
            result_discussion = new_discussion,
            conclusion = new_conclusion,
            precaution = new_precaution
        )
        db.session.add(experiment)
        db.session.commit()
    except Exception as e:
      print(e)
      return jsonify({
          'success':False,
          'message': 'Experiment creation failed',
      })
    finally:  
    # experiment = Experiment(
    #     title = new_title,
    #     aim = new_aim,
    #     theory = new_theory,
    #     apparatus = new_apparatus,
    #     procedure = new_procedure,
    #     result_discussion = new_discussion,
    #     conclusion = new_conclusion,
    #     precaution = new_precaution
    # )
    # db.session.add(experiment)
    # db.session.commit()
        return jsonify({
        'success':True,
        'message': 'Experiment Successfully created',
        'experiment_id': experiment.id,
        'total_experiments': len(Experiment.query.all())
    })

# Update an experiment
@app.route('/experiment/edit/<int:id>', methods=['PATCH'])
def update_experiment(id):
    experiment = Experiment.query.get_or_404(id)
    data = request.get_json()
    experiment.title = data.get('title')
    experiment.aim = data.get('aim')
    experiment.theory = data.get('theory')
    experiment.apparatus = data.get('apparatus')
    experiment.procedure = data.get('procedure')
    experiment.result_discussion = data.get('result_discussion')
    experiment.conclusion = data.get('conclusion')
    experiment.precaution = data.get('precaution')
    db.session.add(experiment)
    db.session.commit()
    return jsonify({
                'success':True,
                'message': 'Experiment Successfully updated',
                'experiment_id': experiment.id,
})

# @app.route('/practicals', methods=['GET'])
# def get_practicals():
#     experiments = Experiment.query.all()
#     if len(experiments) == 0:
#         abort(404)
#     return jsonify({
#         'success': True,
#         'total_experiments': len(Experiment.query.all())
#     })  

# @app.route('/experiments/search', methods=['POST'])
# def search_experiments():
#     body = request.get_json()
#     search_term = body.get('searchTerm')
#     experiments = Experiment.query.order_by(Experiment.id).filter(
#                 Experiment.title.ilike("%{}%".format(search_term))
#                         )
#     return jsonify({
#             'success': True,
#             'found_experiments': experiments,
#             'total_experiments': len(experiments)
#     }) 

@app.errorhandler(422)
def unprocessable(error):
    return (
        jsonify({"success": False, "error": 422, "message": "unprocessable entity"}),
        422,
    )

@app.errorhandler(400)
def bad_request(error):
    return jsonify({"success": False, "error": 400, "message": "bad request"}), 400

@app.errorhandler(405)
def not_allowed(error):
    return (
        jsonify({"success": False, "error": 405, "message": "method not allowed"}),
        405,
    )
@app.errorhandler(500)
def server_error(error):
    return (
        jsonify({"success": False, "error": 500, "message": "internal server error"}),
        500,
    )    
@app.errorhandler(403)
def unauthorized(error):
    return (
        jsonify({"success": False, "error": 403, "message": "Unauthorized"}),
        403,
    )    
@app.errorhandler(401)
def forbidden(error):
    return (
        jsonify({"success": False, "error": 401, "message": "Forbidden"}),
        401,
    )    
    # return app

def configure_logging():
    # Logging Configuration
    if app.config['LOG_WITH_GUNICORN']:
        gunicorn_error_logger = logging.getLogger('gunicorn.error')
        app.logger.handlers.extend(gunicorn_error_logger.handlers)
        app.logger.setLevel(logging.DEBUG)

    else:
        file_handler = FileHandler('error.log')
        file_handler.setFormatter(
            Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
        )
        app.logger.setLevel(logging.INFO)
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)
        app.logger.info('errors')

    
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)