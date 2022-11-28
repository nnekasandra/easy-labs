from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)

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
    return app    