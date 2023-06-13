import mongodb from 'mongodb'
import { getDb } from '../database/index.js'

const ObjectId = mongodb.ObjectId;

/*
  refer to as below: 
  cursor methods 
  https://www.mongodb.com/docs/v6.0/reference/method/js-cursor/

  query operators
  https://www.mongodb.com/docs/v6.0/reference/operator/query/
*/

class Employee {
  constructor({ FirstName, LastName, Age, DateOfJoining, Title, Department, employeeType }) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age
    this.DateOfJoining = DateOfJoining
    this.Title = Title
    this.Department = Department
    this.employeeType = employeeType
    this.currentStatus = 1
  }

  async save() {
    const db = await getDb();
    const result = await db.collection('employees').insertOne(this);
    const saveResult = await db.collection('employees').findOne({ _id: result.insertedId })
    return saveResult
  }

  static find() {
    const db = getDb();
    return db
      .collection('employees')
      .find()
      .toArray()
      .then(employee => {
        if (!employee) {
          throw new GraphQLError('No Employee found', {
            extensions: {
              code: 422,
            },
          });
        }
        return employee;
      })
      .catch(err => console.log(err));
  }
}

export default Employee






// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;

// const employeeSchema = new Schema({
//   FirstName: {
//     type: String,
//     required: true
//   },
//   LastName: {
//     type: String,
//     required: true
//   },
//   Age: {
//     type: String,
//     required: true
//   },
//   DateOfJoining: {
//     type: String,
//     required: true
//   },
//   Title: {
//     type: String,
//     enum: ['Employee', 'Manager', 'Director', 'VP'],
//     required: true
//   },
//   Department: {
//     type: String,
//     options: ['IT', 'Marketing', 'HR', 'Engineering'],
//     required: true
//   },
//   employeeType: {
//     type: String,
//     enum: ['FullTime', 'PartTime', 'Contract', 'Seasonal'],
//     required: true
//   },
//   currentStatus: {
//     type: Number,
//     default: 1,
//     required: true
//   },
// });

// export default mongoose.model('Employee', employeeSchema);
