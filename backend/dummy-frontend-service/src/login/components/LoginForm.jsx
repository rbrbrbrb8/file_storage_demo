import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google'
import Grid from '@mui/material/Grid';

function LoginForm() {
  const login = () => {
    window.location.href = '/auth/google'
  }
  return (
    <div className='login-form'>
      <Typography variant='h3'>Welcome</Typography>
      <div className='test'>  {/* maybe one day i will center the login form */}
        <Grid item container alignContent='center' justifyContent='center' direction='column' spacing={2} className='login-form-container'>
          <Grid item>
            <Typography variant='h4'>Log in or sign up here</Typography>
          </Grid>
          <Grid item textAlign='center' justifySelf='flex-end'>
            <Button onClick={login} variant='contained' startIcon={<GoogleIcon />}>sign in with google</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LoginForm;