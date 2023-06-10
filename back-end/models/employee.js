import mongoose from 'mongoose';
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
  Title: {
    type: String,
    enum: ['Employee', 'Manager', 'Director', 'VP'],
    required: true
  },
  Department: {
    type: String,
    options: ['IT', 'Marketing', 'HR', 'Engineering'],
    required: true
  },
  employeeType: {
    type: String,
    enum: ['FullTime', 'PartTime', 'Contract', 'Seasonal'],
    required: true
  },
  currentStatus: {
    type: Number,
    default: 1,
    required: true
  },
});

export default mongoose.model('Employee', employeeSchema);
