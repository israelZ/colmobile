const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    nameCompany: { type: String, require: true },
    password: { type: String, require: true }
})

module.exports = mongoose.model('Company', companySchema,'company')