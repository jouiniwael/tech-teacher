const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
 
});
var User= mongoose.model('user',UserSchema )
module.exports =User
