const express = require('express');
const router = express.Router();
const { insertDetails,fetchdata,deletedata,salary,overallExp,graduate,setsalary } = require('../Controller/student'); // Replace with your actual controller file

// Define routes
router.post('/insert', insertDetails);
router.get('/fetch', fetchdata);
router.get('/delete', deletedata);
router.get('/salary',salary);
router.get('/overallExp',overallExp);
router.get('/graduate',graduate);
router.post('/setsalary',setsalary);

module.exports = router;