from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from model import *
from populate import populate_db
from flask_migrate import Migrate
from model import app


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
    return 'Hello world'
  

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

@app.route('/experiment-table/<int:experiment_id>', methods=['GET', 'POST'])
def table_data(experiment_id):
  if request.method =="GET":
    experiment_template = ExperimentStructure.query.get_or_404(experiment_id) # columns definition
    experiment_template_table = experiment_template.data_fields
    data = [item.format() for item in experiment_template_table]
    return jsonify(data) 

#   if request.method =="POST":
#     body = request.get_json()
#     new_column = body.get('column')
#     new_row = Fields(
#         field_name = new_column,
#         experiment_structure_id=1
#     )
#     db.session.add(new_row)
#     db.session.commit()
#     return (jsonify({
#         "message":"success",
#         # 'new_field_name': new_row.field_name,
#         # 'id': new_row.id
#         }),201)

# @app.route('/practicals', methods=['POST'])
# def create_experiment():
#     body = request.get_json()
#     new_title = body.get('title')
#     new_aim = body.get('aim')
#     new_theory = body.get('theory')
#     new_apparatus = body.get('apparatus')
#     new_procedure = body.get('procedure')
#     new_result = body.get('result_presentation')
#     new_discussion = body.get('result_discussion')
#     new_conclusion = body.get('conclusion')
#     new_precaution = body.get('precaution')

#     practical = Experiment(
#         title = new_title,
#         aim = new_aim,
#         theory = new_theory,
#         apparatus = new_apparatus,
#         procedure = new_procedure,
#         result_presentation = new_result,
#         new_discussion = new_discussion,
#         conclusion = new_conclusion,
#         precaution = new_precaution
#     )
#     db.session.add(practical)
#     db.session.commit()
#     return jsonify({
#         'success':True,
#         'experiment_id': practical.id,
#         'total_experiments': len(Experiment.Query.all())
#     })

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

    
if __name__ == '__main__':
    app.run() 