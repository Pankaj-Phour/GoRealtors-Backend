const teamModel = require('../models/team');


const getTeam = async(req,res)=>{
    try{
        const data = await teamModel.find().lean();
        console.log("Team members data",data);
        res.status(200).send({
            code:200,
            error:false,
            message:"Team members data fetched successfully",
            response:data
        })
    }
    catch(err){
        res.status(200).send({
            code:400,
            error:true,
            message:err.message,
            response:[]
        })
    }

}

const addMember = async(req,res)=>{
    try{
        const data = req.body;
        console.log("Team member data");
        const dbData = await teamModel.create(data)
        res.status(200).send({
            code:200,
            error:false,
            message:"Team member updated successfully",
            response:dbData
        })
    }
    catch(err){
        res.status(200).send({
            code:400,
            error:true,
            message:err.message,
            response:[]
        })
    }
}


module.exports = {getTeam,addMember}