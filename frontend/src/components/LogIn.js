import './LogIn.css';
import {Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
const malshabLogInUrl = 'https://jsonplaceholder.typicode.com/users'

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
      id: 2,
      password: "2",
      tfasim: [true, false, true],
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
    axios.post(malshabLogInUrl , {
      id: id,
      password: password
    })
    .then( res => {console.log(res)})
    .catch(err => console.log(err));
    users.forEach(user => {
      if (user.id == id && user.password == password) {
        setApprovedUser(user);        
        navigate("/UploadFiles");
              
      }      
    });
  }
	return (
		<Box className="loginS">
      <Typography variant='h6'className='logInText'>מלשב יקר, על מנת להעלות את הטפסים הנדרשים לקראת הטרץ הכנס בעזרת תעודת זהות וקוד שקיבלת במסרון</Typography>
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
          label="קוד ממייל"
          type="password"        
          onChange={(e) => {setPassword(e.target.value)} }
        />
          
        <Button type='submit' sx={{bgcolor:'secondary.main'}} variant="contained">הכנס</Button>
      </form>		
			<Typography variant='h5'  className='logInText'>מערכת הטפסים של חיל המודיעין</Typography>
      
		</Box> 		
		);
}
 
export default LogIn;