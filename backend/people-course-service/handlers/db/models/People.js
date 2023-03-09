const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  type: {type:String, required:true},
  s3Id: {type:String,required:true}
});

const peopleSchema = new Schema({
  id:{type:String,required:true,index:true},
  fullName:{type:String,required:true},
  phoneNum:{type:String,required:true},
  mail:{type:String,required:true},
  authCode:{type:String,required:true},
  files:{type:[fileSchema],required:false},
  // mailAmount:{type:Number,required:false,default:0}
},{collection:"People"})

module.exports = mongoose.model('People',peopleSchema);