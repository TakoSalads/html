from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Example route for Spotify data
@app.route('/api/spotify', methods=['GET'])
def get_spotify_data():
    # Here you'd typically fetch data from Spotify API or a database
    # For this example, we return some hardcoded data
    spotify_data = {
        "track_name": "Blinding Lights",
        "artist": "The Weeknd",
        "album": "After Hours",
        "release_year": 2020
    }
    return jsonify(spotify_data)

if __name__ == '__main__':
    app.run(debug=True)
