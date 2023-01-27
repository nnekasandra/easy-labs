import os

SECRET_KEY = os.urandom(32)

basedir = os.path.abspath(os.path.dirname(__file__))

DEBUG = True

database_name = 'easylab'
database_host = os.getenv('TRIVIA_DB_HOST', 'localhost:5432')
database_password = os.getenv('TRIVIA_DB_PASSWORD')
database_user = os.getenv('TRIVIA_DB_USER', 'postgres')
database_path = "postgresql://{}:{}@{}/{}".format(
    database_user, database_password, database_host, database_name
)
SQLALCHEMY_TRACK_MODIFICATIONS = False

if os.getenv('DATABASE_URL'):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
else:
    SQLALCHEMY_DATABASE_URI = database_path

