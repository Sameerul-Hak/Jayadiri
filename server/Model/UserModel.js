const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    eventsRegistered:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event'
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isSiteAdmin:{
        type:Boolean,
        default:false
    }
})
const UserModel=mongoose.model("UserModel",UserSchema);
module.exports = UserModel;