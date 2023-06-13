import 'dotenv/config'
// import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'

// mongoose
// export default mongoose.connect(process.env.MONGODB_URI)

// mongodb
const mongoURL = process.env.MONGODB_URI
let db

const connectToDb = (callback) => {
  MongoClient.connect(mongoURL)
    .then(client => {
      db = client.db()
      callback(mongoURL);
    })
    .catch(err => {
      console.log('err', err)
      callback(null, err);
    })
}

const getDb = () => {
  if (db) {
    return db;
  }
  throw 'No database found!';
}

export {
  connectToDb,
  getDb
}