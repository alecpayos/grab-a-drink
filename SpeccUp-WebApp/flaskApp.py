from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='app/build', static_url_path='')
CORS(app)

@app.route('/home')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/header')
@cross_origin()
def header():
    return send_from_directory('templates', 'header.html')

@app.route('/content')
@cross_origin()
def home():
    return send_from_directory('templates', 'content.html')

@app.route('/footer')
@cross_origin()
def footer():
    return send_from_directory('templates', 'footer.html')

@app.route('/styles')
@cross_origin()
def styles():
    return send_from_directory('static', 'styles.css')

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike