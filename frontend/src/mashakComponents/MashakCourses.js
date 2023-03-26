import {Box,  IconButton, Typography } from '@mui/material'
import CourseCard from './CourseCard';
import './MashakCourses.css';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NewCourseDialog from './newCourseDialog';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { useUser } from './UserContext';

const allCoursesUrl = 'http://pls-work.pls/GET/api/course/all';

const exampCourses2= [
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:1,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:7
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:8,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:324234,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:12445,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:3459790,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג ב",
    numFemale: 4,
    numMale: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 2,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג ב",
    numFemale: 4,
    numMale: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 2,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג ב",
    numFemale: 4,
    numMale: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 2,
    people: [2,4,5,3,324,547,1234,54376]
  },
  {
    name: "טרצ מסוג ג",
    numFemale: 12,
    numMale: 9,
    keva: 5,
    a16: 2,
    images: 7,
    id: 2,
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
      console.log(res.data);
      //setCourses(res.data);
      
    })
    .catch( err => {console.log(err)})
    setCourses(exampCourses2);
  },[])

  return ( 
    <Box className="CoursesContainer">
      <Typography variant='h2' className="headline">
        הקורסים שלי
      </Typography>
      {exampCourses && <Box className='coursesDimen'>
        {
          exampCourses.map((course) => (
            <CourseCard key={course.id} details={course} setCourseInUse={setCourseInUse} />
          ))}
      </Box>}
        <NewCourseDialog/>
        
    </Box>
    );
}
 
export default MashakCourses;