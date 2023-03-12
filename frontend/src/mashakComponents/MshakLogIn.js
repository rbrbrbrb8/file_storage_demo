import './MashakLogIn.css';
import {Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const MashakLogIn = ({setApprovedUser}) => {

  const users = [
    {
        userName: "lev",
        password: "32144",
        team: "michuv"
    },
    {
        userName: "u1",
        password: "123456",
        team: "t1"
    },
    {
        userName: "u2",
        password: "456879",
        team: "t2"
    },
  ]; 
  
  //onst navigate = useNavigate();
  const [userName, setId] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) =>{
    e.preventDefault();   
    users.forEach(user => {
      if (user.userName == userName && user.password == password) {
        setApprovedUser(user);        
        //navigate("/UploadFiles");
              
      }      
    });
  }
  
	return (
		<Box className="loginS">
      <form onSubmit={handleSubmit} className="logInForm">
        <TextField
          className="TextForm"
          label="שם משתמש"
          type=""   
          onChange={(e) => {setId(e.target.value)} }      
          
        />
        <TextField
          className="TextForm"
          label="סיסמה"
          type="password"
          onChange={(e) => {setPassword(e.target.value)} }       
        />
          
        <Button type='submit' variant="contained">הכנס</Button>
      </form>		
			<Typography variant='h5' className='logInText'>מערכת הטפסים של חיל המודיעין</Typography>
      
		</Box> 		
		);
}
 
export default MashakLogIn;