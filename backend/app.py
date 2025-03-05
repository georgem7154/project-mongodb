from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri)
db = client.your_database_name

@app.route('/api/data', methods=['GET'])
def get_data():
    # Fetch data from MongoDB
    data = db.your_collection_name.find()
    result = []
    for item in data:
        result.append({
            'id': str(item['_id']),
            'name': item['name'],
            'value': item['value']
        })
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
