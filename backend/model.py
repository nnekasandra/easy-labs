from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os

database_name = 'practicalfields'
database_host = os.getenv('TRIVIA_DB_HOST', 'localhost:5432')
database_password = os.getenv('TRIVIA_DB_PASSWORD')
database_user = os.getenv('TRIVIA_DB_USER', 'postgres')
database_path = "postgresql://{}:{}@{}/{}".format(
    database_user, database_password, database_host, database_name
)
db = SQLAlchemy()
migrate = Migrate()
"""
setup_db(app)
    binds a flask application and a SQLAlchemy service
"""
def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    migrate.init_app(app, db)
    db.create_all()

class ExperimentStructure(db.Model):
    _tablename_ = 'experiment_structure'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    aim = db.Column(db.String)
    theory = db.Column(db.String)
    procedure = db.Column(db.String)
    apparatus = db.Column(db.String)
    result_presentation = db.relationship('PracticalData', backref="experiment_structure")
    result_discussion = db.Column(db.String)
    conclusion = db.Column(db.String)
    precautions = db.Column(db.String)
    experiment = db.relationship('Experiment', backref='experiment_structure')

    def __repr__(self):
        return f'<ExperimentStructure "{self.title}">'


class Experiment(db.Model):
    _tablename_ = 'experiment'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    experiment_id = db.Column(db.Integer, db.ForeignKey('experiment_structure.id'))
    record_values = db.Column(db.relationsip('Values', backref='experiment'))
    def __repr__(self):
        return f'<Experiment "{self.title}">'

class PracticalData(db.Model):
    _tablename_ = 'practical_data'
    id = db.Column(db.Integer, primary_key=True)
    heading = db.Column(db.relationship('practical_data', backref='values'))
    field_record = db.Column(db.relationship(db.integer, db.ForeignKey('experiment_structure.result_presentation')))

class Values(db.Model):
    _tablename_ = 'values'
    id = db.Column(db.Integer, primary_key=True)
    field = db.Column(db.ForeignKey('practical_data.heading'))
    value = db.Column(db.Float)
    experiment_id = db.Column(db.ForeignKey('experiment.id'))