const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  DateOfJoining: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  employeeType: {
    type: String,
    required: true
  },
  currentStatus: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
