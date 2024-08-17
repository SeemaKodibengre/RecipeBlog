const mongoose=require("mongoose");
const {Schema}=mongoose.Schema;
const favSchema=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recipe_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports=mongoose.model('Favriote',favSchema);