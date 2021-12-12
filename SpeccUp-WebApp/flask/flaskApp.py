from flask import Flask, send_from_directory, render_template

app = Flask(__name__,
            static_url_path='',
            static_folder='../app/build',
            template_folder='../app/build')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run() 

# https://www.instagram.com/mkyobera/
# https://twitter.com/KevinsonMike