const express = require("express");
const app = express();
const mongoose = require("mongoose");

const companyRoutes = require('./routes/companyRouter');
const employerRoutes = require('./routes/employerRouter');

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://colmobile:10203040@colmobile.6rwjn.mongodb.net/interview?retryWrites=true&w=majority", () => {
    console.log('conected to mongoDB')
})

app.use('/company',companyRoutes)
app.use('/employer',employerRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
