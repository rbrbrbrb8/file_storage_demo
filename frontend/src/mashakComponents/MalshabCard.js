import {Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import './MalshabCard.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

import Face4RoundedIcon from '@mui/icons-material/Face4Rounded';
import FaceRetouchingOffRoundedIcon from '@mui/icons-material/FaceRetouchingOffRounded';

import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SignalCellularNoSimRoundedIcon from '@mui/icons-material/SignalCellularNoSimRounded';
import axios, { Axios } from 'axios';

const imageUrl = 'https://jsonplaceholder.typicode.com/users';
const kevaUrl = 'https://jsonplaceholder.typicode.com/users';
const a16Url = 'https://jsonplaceholder.typicode.com/users';
const reminderUrl = 'sendreminder'

const MalshabCard = ({malshab}) => {

  const makshabId=malshab.id;
  const handleImageClick = ()  =>{
    axios.get(imageUrl, {makshabId})
    .then( res => {
      console.log(res, 'open image')
    })
    .catch(err => console.log(err))
  }
  const handleKevaClick = ()  =>{
    axios.get(kevaUrl, {makshabId})
    .then( res => {
      console.log(res, 'open keva form')
    })
    .catch(err => console.log(err))
  }
  const handleA16Click = ()  =>{
    axios.get(a16Url, {makshabId})
    .then( res => {
      console.log(res, 'open a16 form')
    })
    .catch(err => console.log(err))
  }

  const handlesendReminder = () => {
    axios.post(reminderUrl , {
      keva: malshab.keva,
      image: malshab.image,
      a16: malshab.a16
    })
    .then( res => console.log("sending...", res))
    .catch(err => console.log(err))
  }


  return ( 
    <div>
    
    <Card className='allCard1'>
    <Grid container spacing={0.1} className='gridOri' >
      <Grid item xs={3}>
      <CardContent className='malshabName'>
        <Typography variant="body2" color="text.secondary">
          {malshab.name}
        </Typography>        
      </CardContent>
      </Grid>

      <Grid item xs={2}>
        <CardActions>
          {malshab.image && <IconButton onClick={handleImageClick} aria-label="image">
            <ImageRoundedIcon  sx ={{color: "#3BAF00"}} />
          </IconButton>}
          {!malshab.image && <IconButton disableRipple aria-label="image">
          <ImageNotSupportedRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}
          
        </CardActions> 
      </Grid>

      <Grid item xs={2}>
        <CardActions>
          {malshab.keva &&<IconButton onClick={handleKevaClick} aria-label="keva">
              <DescriptionRoundedIcon sx ={{color: "#3BAF00"}}  />
          </IconButton>}
          {!malshab.keva && <IconButton disableRipple aria-label="image">
          <SignalCellularNoSimRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}

        </CardActions>
      </Grid>

      <Grid item xs={2}>
        {(malshab.gender==2) && <CardActions>
          {malshab.a16 &&<IconButton onClick={handleA16Click} aria-label="a16">
            <Face4RoundedIcon  sx ={{color: "#3BAF00"}}  />
          </IconButton>}
          {!malshab.a16 && <IconButton disableRipple aria-label="image">
          <FaceRetouchingOffRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}
          
        </CardActions>}
      </Grid>
      
      <Grid item xs={3}>
        <CardActions>
          <IconButton onClick={handlesendReminder} aria-label="sendNotif">
            <SendRoundedIcon className='reversIcon'  />
          </IconButton>        
        </CardActions> 
      </Grid>

    </Grid>
    </Card>
    </div>  
  );
}
 
export default MalshabCard;