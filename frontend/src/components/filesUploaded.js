import { Box, Typography } from "@mui/material";
import "./filesUploaded.css"
const FileUploadScreen = () => {
	return (
		<Box className='screenBack'>
			<Typography variant='h3' className='logInText'>הקבצים התקבלו בהצלחה </Typography>
			<Typography variant='h3' className='logInText'>תודה על שיתוף הפעולה</Typography>
			
		</Box>
	);
}
 
export default FileUploadScreen;