from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://maheswari1187:Maheswari_18@maheswari.duqhamd.mongodb.net/?retryWrites=true&w=majority')
db = client['your_database_name']
collection = db['your_collection_name']

# Sample JSON data
data = [
    {
        "end_year": "",
        "intensity": 6,
        "sector": "Energy",
        "topic": "gas",
        "insight": "Annual Energy Outlook",
        "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
        "region": "Northern America",
        "start_year": "",
        "impact": "",
        "added": "January, 20 2017 03:51:25",
        "published": "January, 09 2017 00:00:00",
        "country": "United States of America",
        "relevance": 2,
        "pestle": "Industries",
        "source": "EIA",
        "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
        "likelihood": 3
    },
    # Add more data entries here...
]

# Insert data into MongoDB
collection.insert_many(data)

@app.route('/')
def index():
    return 'Welcome to the Data Visualization Dashboard!'

@app.route('/api/data')
def get_data():
    # Retrieve data from MongoDB collection
    cursor = collection.find({}, {'_id': 0})  # Exclude _id field
    data = list(cursor)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
