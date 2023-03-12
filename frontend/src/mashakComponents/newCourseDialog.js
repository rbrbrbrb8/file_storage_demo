import {Box,  Dialog,  DialogContent,  DialogContentText,  DialogTitle,  IconButton, TextField, Typography} from '@mui/material'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './newCourseDialog.css';

const NewCourseDialog = ({open}) => {

  const [dialogState, setDialogState] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () =>{
    setDialogState(false);
  }

  const handleChangeDrop = (file1) => {
    setFile(file1);
    console.log("asdfdasf");    
  };

  const handleDropFile = (file1) => {
    console.log("123456");
  }
  const fileTypes = ["JPG", "PNG", "PDF"];
 
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

            <FileUploader  onDrop={handleDropFile} handleChange={handleChangeDrop} label={"אקסל של מגניבים"} hoverTitle="העלה" name="file" types={fileTypes} />
            {/* {file && <Typography>{file}</Typography>} */}
          </Box>
        </DialogContent>
      </Dialog>
      
    </Box>
  );
}
 
export default NewCourseDialog;