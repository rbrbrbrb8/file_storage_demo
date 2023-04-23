import {Box,  Button,  Dialog,  DialogContent,  DialogContentText,  DialogTitle,  IconButton, TextField, Typography} from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import axios, { Axios } from 'axios';
import excelImg from '../images/excelIcon1.png'
import './newCourseDialog.css';
import * as XLSX from 'xlsx';

const newCourseUrl = 'http://localhost:3100/api/course/new';

let arryOfPeople = [
  {
    id:"123456789",
    fullName: "person1",
    phoneNum: "0543199370",
    mail: "ksjdfhs@gmail.com",
    gender:"male",
    authCode: "12312"
  },
  {
    id:"123456788",
    fullName: "person2",
    phoneNum: "0543199371",
    mail: "ksjdfhs2@gmail.com",
    gender:"female",
    authCode: "12313"
  },
  {
    id:"123456787",
    fullName: "person3",
    phoneNum: "0543199374",
    mail: "ksjdfhs3@gmail.com",
    gender:"female",
    authCode: "12314"
  }
];

const NewCourseDialog = ({open}) => {

  const [dialogState, setDialogState] = useState(false);
  const [showFiles, setShowFiles] =useState(false);
  const [courseName,setCourseName] = useState(null);
  const [openningDate, setOpenningDate] = useState(null);
  const [lastSubmitDate,setLastSubmitDate] = useState(null);
  const [file, setFile] = useState(null);


  const startd = Date.now();

  const handleSubmitClick =async () =>{
    console.log(arryOfPeople);
    const excelFile =await file.arrayBuffer();
    const workBook = XLSX.read(excelFile);

    const excelSheet = workBook.Sheets[workBook.SheetNames[0]];
    arryOfPeople = XLSX.utils.sheet_to_json(excelSheet);
    
    console.log("over with shenanigans", arryOfPeople);
    
    

    // counts males and females
    let malesCou = 0;
    let femalesCou = 0;
    for (let index = 0; index < arryOfPeople.length; index++) {
      if (arryOfPeople[index].gender === "male" || arryOfPeople[index].gender === 1)
        malesCou++
        else
        femalesCou++;      
    }

    //sending new course to back
    axios.post(newCourseUrl,
      {
        people:arryOfPeople,       
        name: courseName,
        startDate:openningDate,
        deadline:lastSubmitDate,
        males:malesCou,
        females:femalesCou,
        a16:0,
        keva:0,
        images:0
      })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setDialogState(false);
  }

  const handleClose = () =>{
    setDialogState(false);
  }

  const handleChangeDrop = (file1) => {    
    if (file1) {
      setFile(file1);
      setShowFiles(true);      
    }       
  };
  

  const handleDropFile = (file1) => {
    //console.log("123456");
  }
  const fileTypes = ["XLSX","XLS"];
 
  return ( 
    
    <Box>
      <Box className="buttonCont">
        <IconButton size="large" aria-label="keva" onClick={() => setDialogState(true)}>
          <AddCircleRoundedIcon  fontSize='large' className='iconMasCou' />
        </IconButton>
      </Box>
      <Dialog
        open={dialogState}
        onClose={handleClose}
        className='fullDialogSt'        
      >
        <DialogTitle className='dialogTitelSt'>
          <Typography align='center' variant='body1' className='titele5size' >יצירת קורס חדש</Typography>
        </DialogTitle>
        <DialogContent className='dialogContentSt'>
          <Box className="dialogFormContainer ">
            <TextField className='formElement1' onChange={(e) => setCourseName(e.target.value)} type="text"  />
            <Typography variant='body2' align='right'>שם קורס</Typography>

            <TextField type="date"  onChange={(e) => setOpenningDate(e.target.value)} className='formElement1' />
            <Typography variant='body2' align='right'>תאריך פתיחה</Typography>

            <TextField type="date" onChange={(e) => setLastSubmitDate(e.target.value)} className='formElement1' />
            <Typography variant='body2' className='textmrgDown' align='right'>תאריך אחרון להעלאת קבצים</Typography>

            { <FileUploader  onDrop={handleDropFile} handleChange={handleChangeDrop} label={"אקסל של מגניבים"} hoverTitle="העלה" name="file" types={fileTypes} />}
            {showFiles && <Box className='showFile'><Typography>{file.name}</Typography> <img src={excelImg} className='FileTypeImage' /></Box> }
            <Button variant="contained" type='submit' onClick={handleSubmitClick} className='formButton'>הוסף קורס </Button>
            
          </Box>
        </DialogContent>
      </Dialog>
      
    </Box>
  );
}
 
export default NewCourseDialog;