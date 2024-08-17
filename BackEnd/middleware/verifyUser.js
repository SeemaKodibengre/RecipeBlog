
const jwt=require('jsonwebtoken');
const secretKey=process.env.JWT_TOKEN;

const verifyToken=async()=>{
    const token=req.header('token');
if(!token){
    res.status(401).json({error:"access denied no token provided"})
    
        }
    try{

const data=await jwt.verify(token,secretKey);
next();
    
    }catch(err){
res.send(403).json({message:"invalid token"});
    }

}

module.exports=verifyToken;