const Employer = require('../models/employer');
const mongoose = require("mongoose");

module.exports = {
    updateEmployer: async (req, res) => {
        const { _id } = req.params
        const { name, date, job} = req.body
        
        try {
            const resUpdate = await Employer.updateOne({ _id }, { name, dateJoin:date, job })
            res.status(200).json({ status: true,resUpdate })

        } catch (error) {
            res.status(500).json({ status: false, error });
        }

    },
    getEmployersByCompany: async (req, res) => {
        const { id } = req.body

        try {
            const resEmployers = await Employer.find({ idCompany: id })
            res.status(200).json({ status: true, resEmployers })

        } catch (error) {
            res.status(500).json({ status: false, error });
        }
    },
    deleteEmployer: async (req, res) => {
        const { _id } = req.params

        try {
            const resDelete = await Employer.deleteOne({ _id })
            res.status(200).json({ status: true, resDelete })
        } catch (error) {
            res.status(500).json({ status: false, error });
        }
    },
    addEmployer:async (req, res) => {

        const { name, date, job,idCompany } = req.body

        const employer=new Employer({_id:mongoose.Types.ObjectId(), name, dateJoin:date, job,idCompany})
    
        employer.save().then(resInsert => {
            res.status(200).json({ status: true, resInsert })
        }).catch(error => {
            res.status(500).json({ status: false, error });
        })
    }


}
