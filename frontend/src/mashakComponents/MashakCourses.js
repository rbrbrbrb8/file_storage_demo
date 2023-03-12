import {Box,  IconButton, Typography } from '@mui/material'
import CourseCard from './CourseCard';
import './MashakCourses.css';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import NewCourseDialog from './newCourseDialog';

const exampCourses = [
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:1
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
    id:8
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:324234
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:12445
  },
  {
    name: "טרצ מסוג א",
    numFemale: 16,
    numMale: 18,
    keva: 17,
    a16: 8,
    images: 24,
    id:3459790
  },
  {
    name: "טרצ מסוג ב",
    numFemale: 4,
    numMale: 8,
    keva: null,
    a16: 2,
    images: 7,
    id: 2
  }
];

const MashakCourses = () => {
  return ( 
    <Box className="CoursesContainer">
      <Typography variant='h2' className="headline">
        הקורסים שלי
      </Typography>
      <Box className='coursesDimen'>
        {
          exampCourses.map((course) => (
            <CourseCard key={course.id} details={course} />
          ))}
      </Box>
        <NewCourseDialog/>
        
    </Box>
    );
}
 
export default MashakCourses;