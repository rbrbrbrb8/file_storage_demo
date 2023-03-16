import {Box,  Button,  Dialog,  DialogContent,  DialogContentText,  DialogTitle,  IconButton, TextField, Typography} from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import excelImg from '../images/excelIcon1.png'
import './newCourseDialog.css';

const NewCourseDialog = ({open}) => {

  const [dialogState, setDialogState] = useState(false);
  const [file, setFile] = useState(null);
  const [showFiles, setShoeFiles] =useState(false);

  const handleClose = () =>{
    setDialogState(false);
  }

  const handleChangeDrop = (file1) => {
    
    if (file1) {
      setFile(file1);
      setShoeFiles(true);
      console.log(file.type);
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
            <TextField className='formElement1'  type="text"  />
            <Typography variant='body2' align='right'>שם קורס</Typography>

            <TextField type="date"   className='formElement1' />
            <Typography variant='body2' align='right'>תאריך פתיחה</Typography>

            <TextField type="date"  className='formElement1' />
            <Typography variant='body2' className='textmrgDown' align='right'>תאריך אחרון להעלאת קבצים</Typography>

            {!showFiles && <FileUploader  onDrop={handleDropFile} handleChange={handleChangeDrop} label={"אקסל של מגניבים"} hoverTitle="העלה" name="file" types={fileTypes} />}
            {showFiles && <Box className='showFile'><Typography>{file.name}</Typography> <img src={excelImg} className='FileTypeImage' /></Box> }
            <Button variant="contained" className='formButton'>Contained</Button>
            
          </Box>
        </DialogContent>
      </Dialog>
      
    </Box>
  );
}
 
export default NewCourseDialog;