const express = require("express");
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const {updateEmployer,getEmployersByCompany,deleteEmployer,addEmployer} =require('../controllers/employersController')



router.post("/update/:_id", jsonParser,updateEmployer )
router.post("/get", jsonParser,getEmployersByCompany )
router.delete("/delete/:_id", jsonParser,deleteEmployer)
router.put("/add", jsonParser,addEmployer)
module.exports = router