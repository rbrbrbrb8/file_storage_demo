import {Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import './CourseCard.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';



const CourseCard = ({details}) => {

  const sumOfParticipants = details.numFemale +details.numMale;
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
        <IconButton  aria-label="delete" >
          <SendRoundedIcon className='reversIcon'  />
        </IconButton>
        
      </CardActions>
    </Card>    
  );
}
 
export default CourseCard;