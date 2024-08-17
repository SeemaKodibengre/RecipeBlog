import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ForgetPassword() {
  const navigate=useNavigate();
const [email,setEmail]=useState('');



const handleSubmit=async(e)=>{
e.preventDefault();
try{
let response= await axios.post(`http://localhost:7001/app/forgot`,{email});
if(response.status==='success'){
  navigate('/login')
}
}catch(err){
  console.log("Error:", err);
}
}

  return (
    <div>

<Container component="main" maxWidth="xs" >
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.paper',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
     
      <Typography component="h1" variant="h5">
       Forgot Password
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }} >
        <Grid container spacing={2}>
          
          
         
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Grid>
          
          
          
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: 'primary.main' }}
           onClick={handleSubmit}
        >
          Send Mail
        </Button>
        <Grid container justifyContent="flex-end">
       
        </Grid>
      </Box>
    </Box>
 
  </Container>


    </div>
  )
}

export default ForgetPassword