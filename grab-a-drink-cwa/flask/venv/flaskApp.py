from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

app = Flask(__name__, static_url_path='',
                    static_folder='../../build',
                    template_folder='../../build')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:alec@localhost:5432/grab_a_drink'
app.config['SECRET_KEY'] = 'DADOODZ'
db = SQLAlchemy(app)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    middle_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50), nullable=False)
    mobile_number = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    birthdate = db.Column(db.DateTime)
    gender = db.Column(db.String(20))
    age = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(80), nullable=False)



@app.route('/')
def home():
    return render_template('index.html')

@app.errorhandler(404)
def handleURIs(e):
    return render_template('index.html')

@app.route('/stream', methods=['GET', 'POST'])
def streamValues():
    if request.method == 'POST':
        username = request.json['userName']
        password = request.json['userPassword']

    

    return username + password


if __name__ == "__main__":
    app.run(debug=True)