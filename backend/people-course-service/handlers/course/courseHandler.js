const dbHandler = require('../db/dbHandler');
const COURSE = 'Course';
const courseHandler = {};
require('dotenv').config()

courseHandler.createCourse = courseInfo => {
  return dbHandler.insertToCollection(COURSE, courseInfo);
}

courseHandler.getGeneralInfo = () => {
  return dbHandler.findInCollectionAndProject(COURSE, {}, { people:0,__v:0 });
}

courseHandler.findCourse = courseID => {
  return dbHandler.findInCollectionById(COURSE,courseID);
}

module.exports = courseHandler;