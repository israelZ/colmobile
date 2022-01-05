const express = require("express");
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const {checkCompany} =require('../controllers/companyController')

router.post('/get', jsonParser, checkCompany)

module.exports = router