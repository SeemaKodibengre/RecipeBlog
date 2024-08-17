const mongoose=require("mongoose");
const {Schema}=mongoose.Schema;
const reqSchema=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recipeName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Request',reqSchema);