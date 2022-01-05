const Company = require('../models/company');

module.exports = {
    checkCompany: async (req, res) => {
        const { companyName, password } = req.body

        try {
            const company = await Company.findOne({ name: companyName, password })

            let resDB = company ? { id: company._id,nameCompany: company.nameCompany , access: true } : { id: null, access: true }

            res.status(200).json(resDB)

        } catch (error) {
            res.status(500).json({ error })
        }

    }
}