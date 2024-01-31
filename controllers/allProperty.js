const propertyModel = require('../models/allProperty');


const allProperty = async(req,res)=>{
    try{
    const propertyList = await propertyModel.find().lean();
    console.log("All Properties list",propertyList);
    res.status(200).send({
        code:200,
        error:false,
        message:'Properties list fetched successfully',
        response:propertyList
    })
}
catch(err){ 
    res.status(200).send({
        code:200,
        error:true,
        message:err.message,
        response:[]
    })
}
}



const postProperty = async(req,res)=>{
    try{
        let data = req.body;
        console.log("data",data);
      const dbData = await propertyModel.create(
            data
        )
        console.log("DB data",dbData);
        res.status(200).send({
            code:200,
            error:false,
            message:"Checking data provided for the property",
            response:data
        })
    }
    catch(err){
        console.log(err);
        res.status(200).send({
            code:400,
            error:true,
            message: err.message,
            response:[]
        })
    }
}


module.exports = {allProperty,postProperty};