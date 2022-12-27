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
    result_presentation = db.relationship('Fields', backref="experiment_structure")
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
    aim = db.Column(db.String)
    theory = db.Column(db.String)
    procedure = db.Column(db.String)
    apparatus = db.Column(db.String)
    result_discussion = db.Column(db.String)
    conclusion = db.Column(db.String)
    precautions = db.Column(db.String)
    experiment_strucure_id = db.Column(db.ForeignKey('experiment_structure.id'))
    result_presentation = db.Column(db.relationship('Values', backref='experiment'))


    def __repr__(self):
        return f'<Experiment "{self.title}">'

class Fields(db.Model):
    _tablename_ = 'fields'
    id = db.Column(db.Integer, primary_key=True)
    field_name = db.Column(db.String)
    field_value = db.Column(db.relationship('Values', backref='fields'))
    experiment_structure_id = db.Column(db.relationship(db.ForeignKey('experiment_structure.id')))

class Values(db.Model):
    _tablename_ = 'values'
    id = db.Column(db.Integer, primary_key=True)
    field_id = db.Column(db.ForeignKey('fields.id'))
    value = db.Column(db.Integer)
    experiment_id = db.Column(db.ForeignKey('experiment.id'))