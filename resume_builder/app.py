#cd D:\Code\resume_builder

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resume', methods=['POST'])
def resume():
    # Process form data here
    name = request.form['name']
    email = request.form['email']
    # Add logic to save or process resume data
    return render_template('resume.html', name=name, email=email)

if __name__ == '__main__':
    app.run(debug=True)