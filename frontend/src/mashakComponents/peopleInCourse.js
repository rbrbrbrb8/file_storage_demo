import {Box, Button, TextField, Typography } from '@mui/material'
import axios, { Axios }  from 'axios';
import { useEffect, useState } from 'react';
import MalshabCard from './MalshabCard';
import './peopleInCourse.css';

const peopleInCourseArr1 = [
  {
    fullName: "שמואל רסקין",
    id: 32554748949,
    phone: 52201294,
    gender:1, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "נחמה רסקין",
    id: 2125363574,
    phone: 52352341,
    gender:2, 
    image:false,
    a16:true,
    keva: false
  },
  {
    fullName: "שאליעזר קין",
    id: 4513252647,
    phone: 524362346,
    gender:1, 
    image:true,
    a16:false,
    keva: true
  },
  {
    fullName: "מחנה יהודון",
    id: 856456231,
    phone: 5865743342,
    gender:2, 
    image:true,
    a16:true,
    keva: false
  },
  {
    fullName: "דבורה ג",
    id: 9823437,
    phone: 526347463,
    gender:1, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "מלחששפרפק ג",
    id: 7246480,
    phone: 50987564,
    gender:2, 
    image:true,
    a16:false,
    keva: true
  },
  {
    fullName: "דוב רבינוביץ",
    id: 274578085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "דוב רבינוביץ",
    id: 274548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "דוב רבינוביץ",
    id: 2745489085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "דוב רבינוביץ",
    id: 2745483085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "דוב רבינוביץ",
    id: 27466548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },
  {
    fullName: "דוב רבינוביץ",
    id: 27486548085,
    phone: 54845876,
    gender:2, 
    image:true,
    a16:false,
    keva: false
  },  
  {
    fullName: "סנאית ג",
    id: 615234578,
    phone: 53473625,
    gender:1, 
    image:true,
    a16:true,
    keva: false
  }
  
]
const peopleUrl='http://localhost:3100/api/people/many';
const courseUrl='http://localhost:3100/api/course/';

const PeopleInCourse = ({courseInUse}) => {
  const [peopleInCourseArr, setPeopleInCourse] = useState(null);

  const ids1 = ['6405e9d45465586304961f5d', '64413ad4e287d467b6aba7a4', '64413ad4e287d467b6aba7a5'];

  useEffect(() => {
    const newCourseUrl = courseUrl+courseInUse._id;
    axios.get(newCourseUrl)
    .then(res => {
      axios.get(peopleUrl, {params:{ids:JSON.stringify(res.data.people)}})
      .then(res2 => {
        console.log(res2.data, "sad");
        if (res2.data.length>0)
          setPeopleInCourse(res2.data)
        else
          setPeopleInCourse(peopleInCourseArr1);      
      })
      .catch(err =>console.log(err))    
    })
    .catch(err => console.log(err));    
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