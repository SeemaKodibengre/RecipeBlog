const mongoose=require("mongoose");
const {Schema}=mongoose.Schema;
const ratingSchema=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recipe_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    rating:{
        type:Number,
        required:false
    },
    review:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model('Rating',ratingSchema);