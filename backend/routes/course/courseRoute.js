const express = require('express');
const courseHandler = require('../../handlers/course/courseHandler');
const peopleHandler = require('../../handlers/people/peopleHandler');
const courseRouter = express.Router();

courseRouter.post('/', async (req, res) => { //the request gets deadline,open day,list of people,and name and creates a new course document in db
  const { people, name, deadline, startDate } = req.body;
  const peopleIds = (await peopleHandler.uploadPeople(people)).map(person => person._id);
  const course = {
    name:name,
    deadline:deadline,
    startDate:startDate,
    people:peopleIds
  }
  const uploaded = await courseHandler.createCourse(course);
  //consider mapping the original people and get just the tazes, and then upload to both collections simultaneously
  res.send(uploaded);
});

courseRouter.get('/all', async (req, res) => { //the request gets empty and returns general details on all of the courses (future - use access control)
 const info = await courseHandler.getGeneralInfo();
 res.send(info);
})

courseRouter.get('/:id', async (req, res) => { //this request gets and id of a course and returns the specific details on that course and its people
  const {id} = req.params;
  const course = await courseHandler.findCourse(id);
  res.send(course);
})

module.exports = courseRouter;
