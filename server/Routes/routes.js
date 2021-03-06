const express = require('express');
const { createAuthUsers, loginUsers, getUsers, logout, currentUser } = require('../controllers/create-login-Controller');
const{createDoctor, getDoctors, updateDoctors, deleteDoctors}= require('../controllers/doctorControllers');
const { createEmployee, getEmployees, updateEmployees, deleteEmployee } = require('../controllers/employeeController');
const { createPatient, getPatients } = require('../controllers/patientController');
const { verifyToken } = require('../Middlewares/verifyToken');


const router = express.Router();

router.post('/createDoctor', createDoctor);
router.get('/getDoctors', verifyToken, getDoctors)
router.patch('/updateDoctors', updateDoctors)
router.post('/deleteDoctor/:id', deleteDoctors)
router.post('/createEmployee', createEmployee)
router.get('/getEmployees', verifyToken, getEmployees)
router.patch('/updateEmployee', updateEmployees)
router.delete('/deleteEmployee', deleteEmployee)
router.post('/createAuthUser', createAuthUsers)
router.post('/loginUsers', loginUsers)
router.get('/getUsers', getUsers)
router.post('/logout', verifyToken, logout)
router.post('/createPatient', createPatient)
router.get('/getPatients',verifyToken, getPatients)
//router.get('/currentUser', currentUser)


module.exports = router
