const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  objectifOftheCourse: {
    type: String,
  },
  title: {
    type: String,
    unique: true,
  },
  date: {
    type: String,
  },

  numberOfStudents: {
    type: integer,
  },
  planOftheLecture: {
    type: String,
    
  },
  generalDetails: {
    type: String,
  },
  assimilation:{
    type :String,
  }

});
var Course= mongoose.model('course', courseSchema)
module.exports = Course
