import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import {  useTheme } from "@mui/material";
// import { useContext } from "react";

// import { ColorModeContext } from "../theme";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()

      setEmailError(false)
      setPasswordError(false)

      if (email === '') {
          setEmailError(true)
      }
      if (password === '') {
          setPasswordError(true)
      }

      if (email && password) {
          console.log(email, password)
      }
  }
  // const theme = useTheme();
 
  // const colorMode = useContext(ColorModeContext);
  
  return (

    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '100vh',
        height: '100vh',
        
      }}
    >

      <Box
        sx={{
          maxWidth: '550px',
          width: '90%',
          margin:'0 auto',
          height: '370px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          padding: '2em 1.5em',
        //  background: '#fff'
        }}
      >
         <img
          alt="logo"
          src={`../../assets/logo.png`}
          style={{ cursor: "pointer", width:'120px' }}
        />
        <Typography 
          sx={{
            color: '#D00018',
            fontWeight: '700',
            marginBottom: '2em'
          }}
        >
           Welcome to Tracking Gadgets Management Portal.
        </Typography>
      
        <form autoComplete="off" onSubmit={handleSubmit}>
       
        <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard"
                    color="secondary"
                    type="email"
                    sx={{mb: 1, width: '100%'}}
                    value={email}
                    error={emailError}
                    // iconStart={<AccountCircle />}
                 />
                
                <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="standard"
                    color="secondary"
                    type="password"
                    sx={{width: '100%'}}
                    value={password}
                    error={passwordError}
                  
                />
                <Link  href="/forgotPassword" color='error' underline="hover" sx={{display: 'flex', justifyContent: 'flex-end'}}>Forgot Password?</Link>
                <br />
                <Button variant="outlined" color="secondary"  type="submit">Login</Button>
              
            
        </form>
                <Box
                sx={{display: 'flex', justifyContent: 'center'}}
                >
<small>Need an account? <Link  href="/register"  color='secondary'>Register here</Link></small>
                </Box>
        
      </Box>
    </Box>
   
  )
}

export default Login