import React, { useState } from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
 
function Login() {
  const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: '', password: '' });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:7000/app/userLog", data);
  

    
  localStorage.setItem('token', JSON.stringify(result.data.token));
  localStorage.setItem('user', JSON.stringify(result.data.findLogin._id));

      if (result.status === 200) {
        setTimeout(()=>{
          toast.success('Login successful');
          navigate('/');

        },2000)
       
      }

      
    } catch (err) {
      toast.error('This email or password is incorrect!!!');
      console.error('Error during form submission:', err);
    }
  };

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
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
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
              onChange={handleInputChange}
            />
          </Grid>
          
          
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleInputChange}
              
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
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
        <Grid item>
            <Link href="/password" variant="body2">
             Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" variant="body2">
              Dont have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>
<ToastContainer/>

    </div>
  )
}

export default Login