import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Box, Typography } from '@mui/material'
import './DropFileZone.css';
import pdfIcon from '../images/pdfIcon.png';
import ImageIcon from '../images/imageIcon.png';

const DropFileZone = ({open, details, addFile}) => { 

  /* const fileTypes = ["JPG", "PNG", "PDF"]; */
  const [underDropMessage, setUnderDropMessage] = useState("טופס לדוגמא");
  const [fileDropped, setFileDropped] = useState(false);
  const [imageUsed, setImageUsed] = useState(pdfIcon);

  const fileTypes = details.files;


  const handleChange = (file1) => {
    if (details.type == "2") {
      setImageUsed(ImageIcon);
    }
    setUnderDropMessage(file1.name)
    setFileDropped(true);
    console.log("adding");
    addFile(file1);
  };

  const handleDrop = (file1) => {
    //console.log(file1);
  }

  return (

    <div className="FullFileDrop">
      <Typography variant='h6' >{details.text}</Typography>     
      <FileUploader onDrop={handleDrop} handleChange={handleChange} label={details.text} hoverTitle="העלה" name="file" types={fileTypes} />
      {fileDropped && <Box className="showFile1">
        <img src={imageUsed} className='FileTypeImage1' />
        <Typography variant='body1' >{underDropMessage}</Typography>
      </Box>}
      {(!fileDropped && details.link) && <a href={details.link} target="_blank" className="dropZoneLink"><Typography variant='body1' >{underDropMessage}</Typography></a>}
      
    </div>
  );
}
 
export default DropFileZone;