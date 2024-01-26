require('dotenv').config();
require('./config/db.js');
const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({limit:'200mb'}));


app.use('/',(req,res)=>{
    res.send({
        code:200,
        message:'Backend is running successfully',
        response:{}
    })
})





app.listen(PORT, {cors:{origin:'*'}}, ()=>{
    console.log(`Conection established successfuly on http://localhost:${PORT}`);
})