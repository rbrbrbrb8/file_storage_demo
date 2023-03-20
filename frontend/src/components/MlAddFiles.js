import {Box, Typography } from '@mui/material'
import './MlAddFiles.css';
import DropFileZone from "./DropFileZone";


const MlAddFiles = ({approvedUser}) => {
  

  const forms = [{
    text: "צרפו קובץ 16 א   ",
    link: "https://www.mitgaisim.idf.il/media/25370/16-%D7%90-%D7%98%D7%A0%D7%98%D7%98%D7%99%D7%91%D7%99.pdf",
    files: ["PDF", "DOCX" ],
    id:1
    },
    {
    text: "צרפו קובץ 16 א   ",
    link: "https://www.mitgaisim.idf.il/media/25370/16-%D7%90-%D7%98%D7%A0%D7%98%D7%98%D7%99%D7%91%D7%99.pdf",
    files: ["PDF", "DOCX" ],
    id:2
    },
    {
      text: " צרפו תמונה לטרץ",
      link: null,
      files: ["JPEG", "PNG", "JPG" ],
      id:3
    }
]
  

  return (  
    <Box className="addFilePage"> 
      <Typography variant='h5' className='logInText'>: {approvedUser.name} קבצים להעלאה</Typography>
          
      {approvedUser.tfasim.map((tofes,index) =>(
        <Box>
          {tofes &&<DropFileZone key={forms[index].id}  details={forms[index]} />}
        </Box>
        
      ))}
      
    </Box>
  );
}
 
export default MlAddFiles;