const mongoose = require('mongoose');


const Property = new mongoose.Schema({
    society_name:{
        type:String,
        required:[true,"Property name is required"],
        unique:[true,"A Property already exists with the same name"]
    },
    society_location:{
        type:String,
        required:true
    },
    society_images:{
        type:[
            {
                url:{
            type:String,
            required:true
        }
    }
    ]
    },
    society_amentities:{
        type:[{
            amentity_name:{
                type:String,
                required:true
            },
            amentity_image:{
                type:String,
                required:true
            }
        }],
        required:true
    },
    society_available_flats:{
        type:[{
            flat_name:{
                type:String,
                requried:true
            },
            flat_image:{
                type:String,
                required:true
            },
            flat_size:{
                type:String,
                required:true
            },
            flat_price:{
                type:String,
                required:true
            }
        }]
    }
})



const propertyModel = mongoose.model('properties',Property)
module.exports = propertyModel;