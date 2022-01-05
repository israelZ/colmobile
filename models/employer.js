const mongoose = require("mongoose");

const companySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name : {type:String,require:true},
    idCompany : {type:String,require:true},
    dateJoin : {type:Date,require:true},
    job : {type:String,require:true}
})

module.exports = mongoose.model('Employee',companySchema,'employee')