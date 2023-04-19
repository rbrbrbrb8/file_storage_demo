const express = require('express');
const courseHandler = require('../../handlers/course/courseHandler');
const peopleHandler = require('../../handlers/people/peopleHandler');
const courseRouter = express.Router();

courseRouter.post('/new', async (req, res) => { //the request gets deadline,open day,list of people,and name and creates a new course document in db
  const { people, name, deadline, startDate, males, females, a16, keva, images } = req.body;
  console.log('got request')
  try {
    const peopleIds = (await peopleHandler.uploadPeople(people)).map(person => person._id); 
    try {
      const course = {
        name:name,
        deadline:deadline,
        startDate:startDate,
        people:peopleIds,
        males:males,
        females:females,
        a16:a16,
        keva:keva,
        images:images
      }
      const uploaded = await courseHandler.createCourse(course);
      //consider mapping the original people and get just the tazes, and then upload to both collections simultaneously
      res.header('Access-Control-Allow-Origin','*');
      res.send(uploaded);
    } catch (error) {
      console.log('error in course handler')
    }
  } catch (error) {
    console.log(error)
  }
  
  
});

courseRouter.get('/all', async (req, res) => { //the request gets empty and returns general details on all of the courses (future - use access control)
 const info = await courseHandler.getGeneralInfo();
 res.header('Access-Control-Allow-Origin','*');
 res.send(info);
})

courseRouter.get('/:id', async (req, res) => { //this request gets and id of a course and returns the specific details on that course and its people
  const {id} = req.params;
  const course = await courseHandler.findCourse(id);
  res.send(course);
})

module.exports = courseRouter;
