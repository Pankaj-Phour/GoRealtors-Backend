const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    agent_name:{
        type:String,
        required : true
    },
    agent_image:{
        type:String,
        required:true
    },
    agent_text:{
        type:String,
        required:true
    },
    agent_mobile:{
        type:Number,
        required:true
    },
    agent_email:{
        type:String,
        required:true
    },
    agent_facebook:{
        type:String,
        required:true
    },
    agent_instagram:{
        type:String,
        required:true
    }

})

const teamModel = mongoose.model('agent',teamSchema);
module.export = teamModel;
