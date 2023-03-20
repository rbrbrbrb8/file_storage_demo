import {Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import './CourseCard.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import axios, { Axios } from 'axios';

const courseReminderUrl ='https://jsonplaceholder.typicode.com/posts'

const CourseCard = ({details}) => {

  const sumOfParticipants = details.numFemale +details.numMale;
  const handleSendReminder =() =>{
    axios.post(courseReminderUrl, {
      courseId: details.id
    })
    .then(res => {console.log("sending reminders for", details.name, "course")})
    .catch( err => console.log(err));
  }
  return (  
    <Card  className='allCard'>
      <CardHeader className='CardHeder'
        avatar={
          <Avatar className='cardAvatar' >
            {details.name.slice(-1)}
          </Avatar>          
        }
      />      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {details.name}
        </Typography>        
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            תמונות: {details.images}/{sumOfParticipants}
        </Typography>
      </CardContent>

      {details.keva && <CardContent>
        <Typography variant="body2" color="text.secondary">
            קבע: {details.keva}/{sumOfParticipants}
        </Typography>
      </CardContent>}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            דין אישה כדין גבר: {details.a16}/{details.numFemale}
        </Typography>
      </CardContent>
      
      <CardActions>
        <IconButton  aria-label="delete" onClick={handleSendReminder} >
          <SendRoundedIcon className='reversIcon'  />
        </IconButton>
        
      </CardActions>
    </Card>    
  );
}
 
export default CourseCard;