const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    image:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    instagram:{
        type:String,
        required:true
    }

})

const teamModel = mongoose.model('agent',teamSchema);
module.exports = teamModel;
