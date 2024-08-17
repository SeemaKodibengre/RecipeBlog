require('dotenv').config();
const userSchema=require("../model/userSchema");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const nodemailer = require('nodemailer');
const secretKey=process.env.JWT_TOKEN;




const Register = async (req, res) => {
    try {
        const {username,phone,email,address,password } = req.body;
        
        const findEmail = await userSchema.findOne({ email });
        if (findEmail) {
            console.log("This email is already exist");
            return res.status(400).json({ error: "email already exits" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password,salt);
            console.log(hashPass)
            const data = await new userSchema({ username:username,phone:phone,email:email,address:address,password:hashPass });
            const saveData = await data.save();
            res.send({ "insertion successfull": true, "inserted data": saveData })
            console.log(saveData)
        }
    }
    catch (err) {
        console.log("insertion unsuccessfull", err);
        res.status(500).json({ error: 'Registration failed', message: err.message });
    }
}

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







const ForgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log("Email received:", email);

  try {
    
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ Status: "User does not exist" });
    }

    
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD 
      }
    });

 
    const mailOptions = {
      from: process.env.EMAIL, 
      to: email,
      subject: 'Reset Password Link',
      
      text: `Please use the following link to reset your password: http://localhost:5173/password/${user._id}/${token}`
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Error:', error);
        console.log('Error Response:', error.response); // Detailed error information
        return res.status(500).send({ Status: "Failed to send email", error: error.message });
      } else {
        console.log('Email sent:', info.response);
        return res.send({ Status: "Success", message: "Password reset email sent" });
      }
    });
    
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
};






module.exports={Register,Login,ForgotPassword}

