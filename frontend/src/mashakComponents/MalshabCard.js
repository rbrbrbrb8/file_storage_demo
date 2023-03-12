import {Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import './MalshabCard.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import ImageNotSupportedRoundedIcon from '@mui/icons-material/ImageNotSupportedRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

import Face4RoundedIcon from '@mui/icons-material/Face4Rounded';
import FaceRetouchingOffRoundedIcon from '@mui/icons-material/FaceRetouchingOffRounded';

import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SignalCellularNoSimRoundedIcon from '@mui/icons-material/SignalCellularNoSimRounded';

const MalshabCard = ({malshab}) => {
  const truecolor="#E02005";
  const falsecolor = "";
  const color = {color: "#E02005" };
  const color2 = null;

  return ( 
    <div>
    {/* <Card  className='allCard1'>
             
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {malshab.name}
        </Typography>        
      </CardContent>     
      
      <CardActions>
        {malshab.image && <IconButton  aria-label="image">
          <ImageRoundedIcon   />
        </IconButton>}
        {!malshab.image && <ImageNotSupportedRoundedIcon  sx ={{color: "#E02005"}} />}
      </CardActions>     

      <CardActions>
      {malshab.keva &&<IconButton  aria-label="keva">
          <DescriptionRoundedIcon   />
        </IconButton>}
        {!malshab.keva &&<SignalCellularNoSimRoundedIcon sx ={{color: "#E02005"}}  />}
      </CardActions>

      {(malshab.gender==2) && <CardActions>
        {malshab.a16 &&<IconButton  aria-label="a16">
          <Face4RoundedIcon  sx={color2}  />
        </IconButton>}
        {!malshab.a16 && <FaceRetouchingOffRoundedIcon sx ={{color: "#E02005"}}/>}
      </CardActions>}

      <CardActions>
        <IconButton  aria-label="sendNotif">
          <SendRoundedIcon className='reversIcon'  />
        </IconButton>        
      </CardActions>      
    </Card>
     */}
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
          {malshab.image && <IconButton  aria-label="image">
            <ImageRoundedIcon   />
          </IconButton>}
          {!malshab.image && <IconButton disableRipple aria-label="image">
          <ImageNotSupportedRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}
          
        </CardActions> 
      </Grid>

      <Grid item xs={2}>
        <CardActions>
          {malshab.keva &&<IconButton  aria-label="keva">
              <DescriptionRoundedIcon   />
          </IconButton>}
          {!malshab.keva && <IconButton disableRipple aria-label="image">
          <SignalCellularNoSimRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}

        </CardActions>
      </Grid>

      <Grid item xs={2}>
        {(malshab.gender==2) && <CardActions>
          {malshab.a16 &&<IconButton  aria-label="a16">
            <Face4RoundedIcon  sx={color2}  />
          </IconButton>}
          {!malshab.a16 && <IconButton disableRipple aria-label="image">
          <FaceRetouchingOffRoundedIcon  sx ={{color: "#E02005"}} />
          </IconButton>}
          
        </CardActions>}
      </Grid>
      
      <Grid item xs={3}>
        <CardActions>
          <IconButton  aria-label="sendNotif">
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