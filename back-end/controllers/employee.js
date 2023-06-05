const Employee = require('../models/employee')
const { employeeData, addEmployeeData } = require('../data')

exports.getEmployeeData = async (req, res, next) => {
  res.json(employeeData)
}

exports.postEmployeeData = async (req, res, next) => {

  await addEmployeeData(req.body)
  res.json(employeeData)
}