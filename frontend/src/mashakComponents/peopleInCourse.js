import {Box, Button, TextField, Typography } from '@mui/material'
import axios, { Axios }  from 'axios';
import { useEffect, useState } from 'react';
import MalshabCard from './MalshabCard';
import './peopleInCourse.css';

const peopleInCourseArr1 = [
  {
    name: "שמואל רסקין",
    id: 32554748949,
    phone: 52201294,
    gender:1, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "נחמה רסקין",
    id: 2125363574,
    phone: 52352341,
    gender:2, 
    image:false,
    a16:true,
    keva: false
  },
  {
    name: "שאליעזר קין",
    id: 4513252647,
    phone: 524362346,
    gender:1, 
    image:true,
    a16:false,
    keva: true
  },
  {
    name: "מחנה יהודון",
    id: 856456231,
    phone: 5865743342,
    gender:2, 
    image:true,
    a16:true,
    keva: false
  },
  {
    name: "דבורה ג",
    id: 9823437,
    phone: 526347463,
    gender:1, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "מלחששפרפק ג",
    id: 7246480,
    phone: 50987564,
    gender:2, 
    image:true,
    a16:false,
    keva: true
  },
  {
    name: "דוב רבינוביץ",
    id: 274578085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "דוב רבינוביץ",
    id: 274548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "דוב רבינוביץ",
    id: 2745489085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "דוב רבינוביץ",
    id: 2745483085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "דוב רבינוביץ",
    id: 27466548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    name: "דוב רבינוביץ",
    id: 27486548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },  
  {
    name: "סנאית ג",
    id: 615234578,
    phone: 53473625,
    gender:1, 
    image:true,
    a16:true,
    keva: false
  }
  
]
const urlPeople='http://localhost:3100/api/people/232323232';

const PeopleInCourse = ({courseInUse}) => {
  const [peopleInCourseArr, setPeopleInCourse] = useState(null);

  useEffect(() => {
    let person = 1;
    axios.get(urlPeople)
    .then(res => {
      console.log(res.data );       
    })
    .catch(err => console.log(err));
    

    setPeopleInCourse(peopleInCourseArr1);
  }, [])

  return (  
    <Box className="container1">
      <Typography className='headline'>
        המלשבים של {courseInUse.name}
      </Typography>
      {peopleInCourseArr && <Box className="peopleList">
        {
            peopleInCourseArr.map((person) => (
              <MalshabCard key={person.id} malshab={person}/>            
            ))}
      </Box>}
    </Box>    
  );
}
 
export default PeopleInCourse;