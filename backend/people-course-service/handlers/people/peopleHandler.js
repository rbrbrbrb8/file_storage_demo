const dbHandler = require('../db/dbHandler');
const PEOPLE = 'People'
const peopleHandler = {};
require('dotenv').config()

peopleHandler.uploadPeople = people => {
  return dbHandler.insertManyToCollection(PEOPLE,people);
}

peopleHandler.findPerson = id => {
  return dbHandler.findOneInCollection(PEOPLE,{id:id});
}

peopleHandler.findManyPeople = idArr => {
  return dbHandler.findInCollection(PEOPLE,{_id:{$in:idArr}})
  // return dbHandler.findInCollection(PEOPLE,{_id: "6405e9d45465586304961f5d"})
}

peopleHandler.addFileToPerson = (id,fileInfo) => { // fileInfo is an object that contains two properties: type and s3Id
    return dbHandler.findOneAndUpdate(PEOPLE,{id:id},{$push:{files:fileInfo}});
}

module.exports = peopleHandler;