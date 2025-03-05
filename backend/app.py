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
db = client["hiraku"]  # Use your database name

@app.route('/')
def home():
    return "Welcome to the MongoDB string API!"

@app.route('/api/string', methods=['GET'])
def get_comments():
    comments = db["string"].find()
    result = []
    for comment in comments:
        result.append({
            'id': str(comment['_id']),
            'text': comment['text'],
        })
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
