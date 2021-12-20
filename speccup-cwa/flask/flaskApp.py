from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__,
            static_url_path='',
            static_folder='../app/build',
            template_folder='../app/build')

CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def handleError():
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