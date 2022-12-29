from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from model import *
from flask_migrate import Migrate
db = SQLAlchemy()
migrate = Migrate()
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    setup_db(app)
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

    @app.route('/practicals', methods=['GET'])
    def practicals():
        experiments = Experiment.query.all()
        if len(experiments) == 0:
            abort(404)
        return jsonify({
            'success': True,
            'total_experiments': len(Experiment.query.all())
        })    

    @app.route('/practicals', methods=['POST'])
    def create_experiment():
        body = request.get_json()
        new_title = body.get('title')
        new_aim = body.get('aim')
        new_theory = body.get('theory')
        new_apparatus = body.get('apparatus')
        new_procedure = body.get('procedure')
        new_result = body.get('result_presentation')
        new_discussion = body.get('result_discussion')
        new_conclusion = body.get('conclusion')
        new_precaution = body.get('precaution')

        practical = Experiment(
            title = new_title,
            aim = new_aim,
            theory = new_theory,
            apparatus = new_apparatus,
            procedure = new_procedure,
            result_presentation = new_result,
            new_discussion = new_discussion,
            conclusion = new_conclusion,
            precaution = new_precaution
        )
        db.session.add(practical)
        db.session.commit()
        return jsonify({
            'success':True,
            'experiment_id': practical.id,
            'total_experiments': len(Experiment.Query.all())
        })

    @app.route('/experiments/search', methods=['POST'])
    def search_experiments():
        body = request.get_json()
        search_term = body.get('searchTerm')
        experiments = Experiment.query.order_by(Experiment.id).filter(
                    Experiment.title.ilike("%{}%".format(search_term))
                            )
        return jsonify({
                'success': True,
                'found_experiments': experiments,
                'total_experiments': len(experiments)
        }) 
    @app.route('/venues/<int:venue_id>/edit', methods=['POST'])      
    @app.route('/experiments/<int:experiment_id>/edit', methods=['PATCH'])
    def update_experiments(experiment_id):
        practical = Experiment.get_or_404(experiment_id)
        body = request.get_json()
        
        return jsonify({
            'success':True
        })   

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
    return app 