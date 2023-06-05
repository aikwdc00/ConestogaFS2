const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee')

router.get('/getEmployeeData', employeeController.getEmployeeData)

router.post('/postEmployeeData', employeeController.postEmployeeData)


module.exports = router;