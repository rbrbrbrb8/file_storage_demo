import "./MashakLogIn.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createContext, useContext, useState } from "react";
import  axios, { Axios } from "axios";
import { UserContext } from "../App";
import { useUser, useUserUpdate } from "./UserContext";
const url = 'https://jsonplaceholder.typicode.com/posts';


const MashakLogIn = ({ setApprovedUser }) => {
  //onst navigate = useNavigate();
  const [userName, setId] = useState();
  const [password, setPassword] = useState();

  const setUser = useUserUpdate();
  const user = useUser();  

  const handleClick = () => {
    setUser('ahaln')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(url , {
      userName: userName,
      password: password
    })
    .then(res => console.log('posting...', res))
    .catch(err => console.log(err))
    
  };

  return (
    <Box className="loginS">
      <form onSubmit={handleSubmit} className="logInForm">
        <TextField
          className="TextForm"
          label="שם משתמש"
          type=""
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <TextField
          className="TextForm"
          label="סיסמה"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button type="submit" variant="contained" onClick={handleClick}>
          הכנס
        </Button>
      </form>
      <Typography variant="h5" className="logInText">
        מערכת הטפסים של חיל המודיעין
      </Typography>
    </Box>
  );
};

export default MashakLogIn;
