from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask


#configure application
app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class ExperimentStructure(db.Model):
    __tablename__ = 'experiment_structure'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    aim = db.Column(db.String)
    theory = db.Column(db.Text)
    apparatus = db.Column(db.String)
    procedure = db.Column(db.Text)
    data_fields = db.relationship("Fields", back_populates="experiment_structure", cascade="all, delete")
    result_discussion = db.Column(db.String)
    conclusion = db.Column(db.String)
    precautions = db.Column(db.String)
    experiments = db.relationship('Experiment', back_populates='experiment_structure_type', cascade="all, delete")

    def __repr__(self):
        return f'<ExperimentStructure "{self.title}">'

    def __init__(self, title, aim, theory, apparatus, procedure, result_discussion,conclusion, precautions):
        self.title = title
        self.aim = aim
        self.theory = theory
        self.apparatus = apparatus
        self.procedure = procedure
        self.result_discussion = result_discussion
        self.conclusion = conclusion
        self.precautions = precautions

    def format(self):
        return {
            'id': self.id,
            'aim': self.aim,
            'theory': self.theory,
            'apparatus': self.apparatus,
            'procedure': self.procedure,
            'result_discussion': self.result_discussion,
            'conclusion': self.conclusion,
            'precautions': self.precautions,
            }
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

    def __init__(self, title, aim, theory, apparatus, procedure, result_discussion,conclusion, precautions):
        self.title = title
        self.aim = aim
        self.theory = theory
        self.apparatus = apparatus
        self.procedure = procedure
        self.result_discussion = result_discussion
        self.conclusion = conclusion
        self.precautions = precautions

    def format(self):
        return {
            'id': self.id,
            'aim': self.aim,
            'theory': self.theory,
            'apparatus': self.apparatus,
            'procedure': self.procedure,
            'result_discussion': self.result_discussion,
            'conclusion': self.conclusion,
            'precautions': self.precautions,
            }
class Fields(db.Model):
    __tablename__ = 'fields'
    id = db.Column(db.Integer, primary_key=True)
    field_name = db.Column(db.String)
    field_values = db.relationship('Values', back_populates='field', cascade="all, delete")
    experiment_structure_id = db.Column(db.Integer, db.ForeignKey('experiment_structure.id'))
    experiment_structure = db.relationship('ExperimentStructure', back_populates="data_fields")

    def __init__(self,field_name,experiment_structure_id):
        self.field_name = field_name
        self.experiment_structure_id = experiment_structure_id
    
    def format(self):
        return{
            'id': self.id,
            'field_name': self.field_name,
            'experiment_structure_id': self.experiment_structure_id
        }
class Values(db.Model):
    __tablename__ = 'values'
    id = db.Column(db.Integer, primary_key=True)
    field_id = db.Column(db.Integer, db.ForeignKey('fields.id'))
    field = db.relationship('Fields', back_populates="field_values")
    value = db.Column(db.Integer)
    experiment_id = db.Column(db.Integer, db.ForeignKey('experiment.id'))
    experiment_type = db.relationship('Experiment', back_populates="experiment_result_values")

    def __init__(self,field_id,value,experiment_id):
        self.field_id = field_id
        self.value = value
        self.experiment_id = experiment_id
    
    def format(self):
        return{
            'id': self.id,
            'value': self.value,
            'experiment_id': self.experiment_id,
        }