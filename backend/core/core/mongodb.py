from pymongo import MongoClient 
client = MongoClient('mongodb://localhost:27017/')
db = client['your_mongo_db_name']