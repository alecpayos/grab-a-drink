from datetime import date, datetime
from flask import Flask, render_template, request
from sqlalchemy import create_engine, Sequence
from flask_cors import CORS
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.functions import func, user
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import TIMESTAMP, Date, String, Integer

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
def dataStream():
    userFirstName = request.json['userFirstName']
    userLastName = request.json['userLastName']
    userBirthDate = request.json['userBirthDate']
    userWeight = request.json['userWeight']
    userHeight = request.json['userHeight']
    userAge = request.json['userAge']

    #expected return is the workout plan
    bmi = str(float(userWeight) / (float(userHeight) * 0.01) * (float(userHeight) * 0.01))
    return bmi
    # def bmiCategory(bmi):
    #     if bmi < 18:
    #         return "Underweight"
    #     elif 18 <= bmi <= 25:
    #         return "Normal"
    #     elif 25 <= bmi <= 29.5:
    #         return "Overweight"
    #     elif 29.5 <= bmi <= 34.5:
    #         return "Obese"
    #     else:
    #         return "Extremely Obese"


    # return "Your Body Mass Index is:\n{0}\n and you category is {1}".format(bmi, bmiCategory(bmi))

    # PostUser = User(
    #     firstname = userFirstName,
    #     lastname = userLastName,
    #     birthdate = userBirthDate,
    #     weight = userWeight,
    #     height = userHeight,
    #     age = userAge,
    #     timecreated = datetime.now(),
    #     lastlog = datetime.now()
    # )

    # session.add(PostUser)
    # session.commit()

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike