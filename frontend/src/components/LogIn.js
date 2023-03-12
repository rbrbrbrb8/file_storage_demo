import './LogIn.css';
import {Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const LogIn = ({setApprovedUser}) => {

  const users = [
    {
      name: "לב קדם",
      id: 3,
      password: "3",
      tfasim: [true, true, true],
      a16: true,
      keva: true,
      image: true
    },
    {
      name: "ישראל ישראלי",
      id: 451564789,
      password: "Ii123456",
      tfasim: [true, true, true],
      a16: true,
      keva: true,
      image: true
    },
    {
      name: "ישראלה הישראלית",
      id: 123456789,
      password: "Ff123456",
      tfasim: [true, true, false],
      a16: true,
      keva: true,
      image: false
    }
  ];  
  
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();    

    users.forEach(user => {
      if (user.id == id && user.password == password) {
        setApprovedUser(user);        
        navigate("/UploadFiles");
              
      }      
    });
  }
	return (
		<Box className="loginS">
      <form onSubmit={handleSubmit} className="logInForm">
        <TextField
          className="TextForm"
          label="תעודת זהות"
          type=""        
          onChange={(e) => {setId(e.target.value)} }
          /* pattern="[0-9]{9}"
          required */
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
 
export default LogIn;