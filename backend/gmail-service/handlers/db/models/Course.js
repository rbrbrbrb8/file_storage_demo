const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name:{type:String,required:true,index:true},
  deadline:{type:Date,required:true},
  startDate:{type:Date,required:true},
  people:{type:[String],required:true},
},{collection:"Courses"})

module.exports = mongoose.model('Courses',courseSchema);