import {Box,  IconButton, Typography } from '@mui/material'
import CourseCard from './CourseCard';
import './MashakCourses.css';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NewCourseDialog from './newCourseDialog';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useUser } from './UserContext';

const allCoursesUrl = 'http://localhost:3100/api/course/all';

const exampCourses2= [
  {
    name: "ארטמיס",
    females: 12,
    males: 18,
    keva: 17,
    a16: 4,
    images: 24,
    id:1,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "קורס תאנה",
    females: 16,
    males: 23,
    keva: 17,
    a16: 8,
    images: 9,
    id:7
  },
  {
    name: "מסלול דרקון",
    females: 12,
    males: 15,
    keva: 12,
    a16: 8,
    images: 24,
    id:8,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "קורס פרדס",
    females: 11,
    males: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:324234,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "קורס מרמ",
    females: 16,
    males: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:12445,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "מסלול אעה",
    females: 16,
    males: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:3459790,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "קורס אורביט",
    females: 4,
    males: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 42342,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "מסלול סיגמא",
    females: 4,
    males: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 325235,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "קורס דולב",
    females: 4,
    males: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 23523,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג ג",
    females: 12,
    males: 9,
    keva: 5,
    a16: 2,
    images: 7,
    id: 32525,
    people: [2,4,5,3,324,547,1234,54376]
  }
];


const MashakCourses = ({setCourseInUse}) => {
  const [exampCourses, setCourses] =useState(null);
  const cardClick = (course) => {
    console.log(course.people)
  }
  useEffect(() =>{
    axios.get(allCoursesUrl)
    .then(res => {     
      setCourses(res.data);  
      console.log(res.data);    
    })
    .catch( err => {console.log(err)})
    
  },[])

  return ( 
    <Box className="CoursesContainer">
      <Typography variant='h2' className="headline">
        הקורסים שלי
      </Typography>
      {exampCourses && <Box className='coursesDimen'>
        {
          exampCourses.map((course) => (
            <CourseCard key={course._id} details={course} setCourseInUse={setCourseInUse} />
          ))}
      </Box>}
        <NewCourseDialog/>
        
    </Box>
    );
}
 
export default MashakCourses;