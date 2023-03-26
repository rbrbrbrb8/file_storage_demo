import {Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import './CourseCard.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';

const courseReminderUrl ='http://pls-work.pls/POST/gmail/sendMail'

const CourseCard = ({details, setCourseInUse}) => {

  const navigate = useNavigate()
  const sumOfParticipants = details.numFemale +details.numMale;
  const handleSendReminder =(setCourseInUse) =>{
    //sends to everybody API needs to be updated
  
    axios.post(courseReminderUrl, {
    courseId: details.id      
  })
  .then(res => {console.log("sending reminders for", details.name, "course")})
  .catch( err => console.log(err));
  console.log(details.people);
  }

  const handleAvatarClick = () => {
    setCourseInUse(details);
    navigate("/Course");
  }
  {/* <Card  className='allCard'>
      <CardHeader className='CardHeder'
        avatar={
          <Avatar onClick={handleAvatarClick} className='cardAvatar' >
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
    </Card> */}

  return (  
    <Card className='allCard'> 
      <Grid container spacing={0.1} className='gridOri1' >
        <Grid item xs={1.5}>
        <CardHeader className='CardHeder'
        avatar={
          <Avatar onClick={handleAvatarClick} className='cardAvatar' >
            {details.name.slice(-1)}
          </Avatar>          
        }
      /> 
      </Grid> 
      <Grid item xs={2.5}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {details.name}
          </Typography>        
        </CardContent>
      </Grid>

      <Grid item xs={2}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              תמונות: {details.images}/{sumOfParticipants}
          </Typography>
        </CardContent>
      </Grid>     
    
      <Grid item xs={3}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              דין אישה כדין גבר: {details.a16}/{details.numFemale}
          </Typography>
        </CardContent>
      </Grid>
    
      <Grid item xs={2}>
          {details.keva && <CardContent>
            <Typography variant="body2" color="text.secondary">
                קבע: {details.keva}/{sumOfParticipants}
            </Typography>
          </CardContent>}
      </Grid>

      <Grid item xs={1}>
        <CardActions>
          <IconButton  aria-label="delete" onClick={handleSendReminder} >
            <SendRoundedIcon className='reversIcon'  />
          </IconButton>        
        </CardActions>
      </Grid>

    </Grid>

    

  </Card>
  );
}
 
export default CourseCard;