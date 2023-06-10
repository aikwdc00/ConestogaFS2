// const Employee = require('../models/employee')
import { employeeData, addEmployeeData } from '../data/index.js'

const getEmployeeData = async (req, res, next) => {
  res.json(employeeData)
}

const postEmployeeData = async (req, res, next) => {

  await addEmployeeData(req.body)
  res.json(employeeData)
}

const employeeController = {
  getEmployeeData,
  postEmployeeData
}

export default employeeController