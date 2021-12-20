from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__,
            static_url_path='',
            static_folder='../app/build',
            template_folder='../app/build')

CORS(app)
# engine = create_engine('postgresql://postgres:alec@localhost:5432/speccup')

# Base = declarative_base()
# Session = sessionmaker()
# Session.configure(bind=engine)

# session = Session()

# class User(Base):
#     __tablename__ = 'person'
#     id = Column(Integer, Sequence('person_id_seq'), primary_key=True, nullable=False)
#     firstname = Column(String(50))
#     lastname = Column(String(50))
#     birthdate = Column(Date)
#     weight = Column(Integer, nullable=False)
#     height = Column(Integer, nullable=False)
#     age = Column(Integer, nullable=False)
#     timecreated = Column(TIMESTAMP, nullable=False, server_default=func.utcnow())
#     lastlog = Column(TIMESTAMP, nullable=False, server_default=func.utcnow())



@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def error(e):
    return render_template('index.html')

@app.route('/stream', methods=['GET', 'POST'])
def processInputs():
    userFirstName = request.json['firstName']
    userLastName = request.json['lastName']
    userBirthdate = request.json['dateValue']
    userWeight = request.json['weight']
    userHeight = request.json['height']
    userAge = request.json['age']

    return "{0} {1} {2} {3} {4} {5}".format(userFirstName, userLastName, userBirthdate, userWeight, userHeight, userAge)

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike