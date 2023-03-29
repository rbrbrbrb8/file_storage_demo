import {Box, Button, Typography } from '@mui/material'
import './MlAddFiles.css';
import DropFileZone from "./DropFileZone";
import { useState } from 'react';
import axios, { Axios } from 'axios';
const sendFilesUrl ="http://pls-work.pls/POST/s3/upload"
const editableFileArry = [];
  
const MlAddFiles = ({approvedUser}) => {
  const [fileArry, setFileArry] = useState(editableFileArry)
  
  const handleSend = () => {

    fileArry.forEach(file => {
      axios.post(sendFilesUrl , {
        files:file
      })
      .then(res => {console.log(res)})
      .catch(err => console.log(err))
    })
  }

  const handleNewFile = (file ) => {    
    editableFileArry.push(file);
    setFileArry(editableFileArry);
  }

  const forms = [{
    text: "צרפו טופס קבע   ",
    link: "https://www.mitgaisim.idf.il/media/25369/%D7%97%D7%95%D7%96%D7%94-%D7%94%D7%AA%D7%97%D7%99%D7%99%D7%91%D7%95%D7%AA-%D7%9E%D7%95%D7%A7%D7%93%D7%9E%D7%AA-%D7%9C%D7%A7%D7%91%D7%A2-%D7%90%D7%97%D7%99%D7%93-%D7%A4%D7%91%D7%A8%D7%95%D7%90%D7%A8-20-4.pdf",
    files: ["PDF" ],
    type: 1,
    id:1
    },
    {
    text: "צרפו טופס 16 א   ",
    link: "https://www.mitgaisim.idf.il/media/25370/16-%D7%90-%D7%98%D7%A0%D7%98%D7%98%D7%99%D7%91%D7%99.pdf",
    files: ["PDF" ],
    type: 1,
    id:2
    },
    {
      text: " צרפו תמונה לטרץ",
      link: null,
      files: ["JPEG", "PNG", "JPG" ],
      type: 2,
      id:3
    }
]
  

  return (  
    <Box className="addFilePage"> 
      <Typography variant='h5' className='logInText'>: {approvedUser.name} קבצים להעלאה</Typography>
          
      {approvedUser.tfasim.map((tofes,index) =>(
        <Box>
          {tofes &&<DropFileZone key={forms[index].id}  details={forms[index]} addFile={handleNewFile} />}
        </Box>        
      ))}

      <Button variant="contained"  sx={{bgcolor:'secondary.main'}} onClick={handleSend}  >שלח</Button>
      
    </Box>
  );
}
 
export default MlAddFiles;