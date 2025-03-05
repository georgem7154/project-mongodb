from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['mycollection']

@app.route('/api/insert', methods=['POST'])
def insert_data():
    data = request.json
    result = collection.insert_one(data)
    return jsonify({'_id': str(result.inserted_id)})

if __name__ == '__main__':
    app.run(debug=True)
