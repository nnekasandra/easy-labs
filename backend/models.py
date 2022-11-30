from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, Response, flash, redirect, url_for
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

class CoreFields(db.Model):
     _tablename_ = 'corefields'
     id = db.Column(db.Integer, primary_key=True)
     title = db.Column(db.String)
     aim = db.Column(db.String)
     theory = db.Column(db.String)
     procedure = db.Column(db.String)
     apparatus = db.Column(db.String)
     result_presentation = db.relationship('Records', backref='CoreFields', lazy='joined', cascade='delete')
     result_discussion = db.Column(db.String)
     conclusion = db.Column(db.String)
     precautions = db.Column(db.String)


     def __init__(self, title, aim, theory, apparatus, procedure, result_presentation, result_discussion, conclusion, precautions):
        self.title = title
        self.aim = aim
        self.theory = theory
        self.apparatus = apparatus
        self.apparatus = procedure
        self.result_presentation = result_presentation
        self.result_discussion = result_discussion
        self.conclusion = conclusion
        self.precautions = precautions

     def insert(self):
        db.session.add(self)
        db.session.commit()

     def update(self):
        db.session.commit()

     def delete(self):
        db.session.delete(self)
        db.session.commit()

     def format(self):
        return {
            'id': self.id,
            'title': self.title,
            'aim': self.aim,
            'theory': self.theory,
            'apparatus': self.apparatus,
            'procedure': self.procedure,
            'result_presentation': self.result_presentation,
            'result_discussion': self.result_discussion,
            'conclusion': self.conclusion,
            'precautions': self.precautions
            }
class Records(db.Model):
     _tablename_ = 'records' 
     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
     practical_id = db.Column(db.ForeignKey('CoreFields.id'), primary_key=True)
     drug_name = db.Column(db.String)
     drug_dose = db.Column(db.Integer)
     drug_concentration = db.Column(db.Integer)
     drug_log_dose = db.Column(db.Integer)

     def __init__(self,practical_id,drug_name,drug_dose,drug_concentration, drug_log_dose):
         self.practical_id = practical_id,
         self.drug_name = drug_name,
         self.drug_dose = drug_dose,
         self.drug_concentration = drug_concentration,
         self.drug_log_dose = drug_log_dose
         
     def insert(self):
        db.session.add(self)
        db.session.commit()

     def update(self):
        db.session.commit()

     def delete(self):
        db.session.delete(self)
        db.session.commit()

     def format(self):
        return{
           'practical_id': self.practical_id,
           'drug_name': self.drug_name,
           'drug_dose': self.drug_dose,
           'drug_concentration': self.drug_concentration,
           'drug_log_dose': self.drug_concentration
        }    