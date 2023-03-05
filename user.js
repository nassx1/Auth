const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('users',new Schema({
    fullName:{
        type:String,
        
    } ,
    image:{
     type:String
    },
    email:{
        type:String,
        
    },
    hashedPassword:{
        type:String,
        
    } ,
    isVerified:{
        type:Boolean,
        default:false
    },
    connected: {
      type: Boolean, 
      default: false
    },
    accessTime:{
      type:Date
    },
    resetPasswordTokenExpired:{
     type:Date
    },
    role: {
      type: String,
      enum: ["motor", "user", "admin", "superAdmin"] 
    },
}))