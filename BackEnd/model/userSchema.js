const mongoose=require("mongoose");
const {Schema}=mongoose;
const userSchema=new Schema({
   username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0,
        required:false
    }
})

module.exports=mongoose.model('User',userSchema);