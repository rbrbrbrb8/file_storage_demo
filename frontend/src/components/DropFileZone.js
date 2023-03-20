import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Typography } from '@mui/material'
import './DropFileZone.css';

const DropFileZone = ({open, details}) => { 

  /* const fileTypes = ["JPG", "PNG", "PDF"]; */

  const fileTypes = details.files;
  const [file, setFile] = useState(null);

  const handleChange = (file1) => {
    setFile(file1);    
  };

  const handleDrop = (file1) => {
    //console.log(file1);
  }

  return (

    <div >     
      <FileUploader onDrop={handleDrop} handleChange={handleChange} label={details.text} hoverTitle="העלה" name="file" types={fileTypes} />
      {details.link && <a href={details.link} target="_blank" className="dropZoneLink"><Typography variant='body1' className='logInText'>טופס לדוגמא</Typography></a>}
    </div>
  );
}
 
export default DropFileZone;