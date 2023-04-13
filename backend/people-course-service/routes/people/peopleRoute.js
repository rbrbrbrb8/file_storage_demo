const express = require('express');
const peopleHandler = require('../../handlers/people/peopleHandler');
const peopleRouter = express.Router();


peopleRouter.post('/', async (req, res) => { //this gets info about a person/many + courseid? and creates a new doc in db
  const { people, courseId } = req.body;
  // console.log(people);
  try {
    const peopleIds = await peopleHandler.uploadPeople(people);
    res.status(200).send(peopleIds.map(doc => doc._id));
  } catch (err) {
    res.status(400).send(err)
  }

});

peopleRouter.post('/addFile',async (req,res) => {
  const {id,fileType,s3Id}  = req.body
  console.log('request taken')
  try {
    const update = await peopleHandler.addFileToPerson(id,{fileType:fileType,s3Id:s3Id});
    console.log('yesss')
    res.status(200).send('lets fucking goooo');
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
  
  // res.send(req.body);
})

peopleRouter.get('/:id', async (req, res) => { //this request gets an id of certain person and returns the info about that person
  const {id} = req.params;
  console.log(req.params);
  const person = await peopleHandler.findPerson(id);
  res.header('Access-Control-Allow-Origin','*');
  res.send(person);
})

module.exports = peopleRouter;
