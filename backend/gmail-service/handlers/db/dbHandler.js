const mongoose = require('mongoose');
const dbHandler = {};
require('dotenv').config();

// console.log(process.env)

dbHandler.init = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/protoImages', { useNewUrlParser: true, useUnifiedTopology: true });
}


function getModel(model) {
  return require('./models/' + model);
}

dbHandler.createIfNotExists = async (modelName, doc, filter) => {
  const Model = getModel(modelName);
  const res = await Model.findOne(filter);
  // console.log(res);
  const toCreate = new Model(doc);
  return res ? undefined : await toCreate.save();
}

dbHandler.findOneInCollection = (modelName,filter) => {
  const Model = getModel(modelName);
  return Model.findOne(filter);
}

dbHandler.findInCollectionAndProject = (modelName,filter,projection) => {
  const Model = getModel(modelName);
  return Model.find(filter,projection);
}

dbHandler.findInCollection = (modelName,filter) => {
  const Model = getModel(modelName);
  return Model.find(filter);
}

dbHandler.findInCollectionById = (modelName,id) => {
  const Model = getModel(modelName);
  return Model.findById(id);
}

dbHandler.insertToCollection = (modelName,doc) => {
  const Model = getModel(modelName);
  const docToSave = new Model(doc);
  return docToSave.save();
}

dbHandler.aggregate  = (modelName,pipe) => {
  const Model = getModel(modelName);
  return Model.aggregate(pipe);
}

dbHandler.insertManyToCollection = (modelName,docArr) => {
  const Model = getModel(modelName);
  return Model.insertMany(docArr);
}

dbHandler.findOneAndUpdate = (modelName,filter,info) => {
  const Model = getModel(modelName);
  return Model.findOneAndUpdate(filter,info,{new:true});
}

module.exports = dbHandler;