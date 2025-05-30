from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"Message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, port=4999)