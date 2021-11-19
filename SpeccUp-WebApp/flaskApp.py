from flask import Flask, send_from_directory
from flask.templating import render_template

app = Flask(__name__)

@app.route('/header')
def header():
    return send_from_directory('templates', 'header.html')

@app.route('/content')
def home():
    return send_from_directory('templates', 'content.html')

@app.route('/footer')
def footer():
    return send_from_directory('templates', 'footer.html')

@app.route('/styles')
def styles():
    return send_from_directory('static', 'styles.css')

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike