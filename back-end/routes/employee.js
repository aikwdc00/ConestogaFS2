import express from 'express';
import ep from '../controllers/employee.js'


const router = express.Router();

router.get('/getEmployeeData', ep.getEmployeeData)

router.post('/postEmployeeData', ep.postEmployeeData)

export default router
