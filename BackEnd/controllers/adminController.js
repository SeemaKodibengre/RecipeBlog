require('dotenv').config();
const userSchema=require("../model/userSchema");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretKey=process.env.JWT_TOKEN;



const Login=async(req,res)=>{
 
 
    try{
      const {email,password}=req.body;
      const findLogin=await userSchema.findOne({email});
      if(!findLogin){
        return res.status(404).json({error:"email not found"});
      }

      const passMatch=await bcrypt.compare(password,findLogin.password);

      if(!passMatch){
        return res.status(404).json({err:"password not found"});
      }

      const idData= findLogin.id;

      const token=await jwt.sign({id:idData},secretKey);
     
      const success=true;
      res.status(200).json({success,token,findLogin});

    }catch(err){
        console.log("insertion unsuccessfull", err);
        res.status(500).json({ error: 'insertion unsuccessfull' })
    }
}


const addRecipes=async()=>{
    try{
const {image, name, description,ingredients,instructions,video}=req.body;


    }catch(err){

    }
}

module.exports=Login;