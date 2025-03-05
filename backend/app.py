from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import json

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# Use the MongoDB URI from the environment variables
mongo_uri = os.getenv("MONGODB_URI")

client = MongoClient(mongo_uri)
db = client["sample_mflix"]  # Use your database name

@app.route('/')
def home():
    return "Welcome to the MongoDB Comments API!"

@app.route('/api/comments', methods=['GET'])
def get_comments():
    comments = db["comments"].find()
    result = []
    for comment in comments:
        result.append({
            'name': comment['name'],
            'email': comment['email'],
            'movie_id': str(comment['movie_id']),
            'text': comment['text'],
            'date': comment['date']
        })
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
