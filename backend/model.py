from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os

database_name = 'practicals'
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
    migrate.init_app(app, db, compare_type=True)
    db.create_all()

class ExperimentStructure(db.Model):
    __tablename__ = 'experiment_structure'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    aim = db.Column(db.String)
    theory = db.Column(db.Text)
    apparatus = db.Column(db.String)
    procedure = db.Column(db.Text)
    experiment_structure_type = db.relationship("Fields", back_populates="experiment_structure_type", cascade="all, delete")
    result_discussion = db.Column(db.String)
    conclusion = db.Column(db.String)
    precautions = db.Column(db.String)
    experiments = db.relationship('Experiment', back_populates='experiment_structure_type', cascade="all, delete")

    def __repr__(self):
        return f'<ExperimentStructure "{self.title}">'


class Experiment(db.Model):
    __tablename__ = 'experiment'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    aim = db.Column(db.String)
    theory = db.Column(db.Text)
    apparatus = db.Column(db.String)
    procedure = db.Column(db.Text)
    result_discussion = db.Column(db.String)
    conclusion = db.Column(db.String)
    precautions = db.Column(db.String)
    experiment_structure_id = db.Column(db.Integer, db.ForeignKey('experiment_structure.id'))
    experiment_structure_type = db.relationship('ExperimentStructure', back_populates='experiments')
    experiment_result_values = db.relationship('Values', back_populates='experiment_type', cascade="all, delete")

    def __repr__(self):
        return f'<Experiment "{self.title}">'

class Fields(db.Model):
    __tablename__ = 'fields'
    id = db.Column(db.Integer, primary_key=True)
    field_name = db.Column(db.String)
    field_values = db.relationship('Values', back_populates='field', cascade="all, delete")
    experiment_structure_id = db.Column(db.Integer, db.ForeignKey('experiment_structure.id'))
    experiment_structure_type = db.relationship('ExperimentStructure', back_populates="experiment_structure_type")

class Values(db.Model):
    __tablename__ = 'values'
    id = db.Column(db.Integer, primary_key=True)
    field_id = db.Column(db.Integer, db.ForeignKey('fields.id'))
    field = db.relationship('Fields', back_populates="field_values")
    value = db.Column(db.Integer)
    experiment_id = db.Column(db.Integer, db.ForeignKey('experiment.id'))
    experiment_type = db.relationship('Experiment', back_populates="experiment_result_values")