const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
 
});

const UserModel = mongoose.model('User', {name:String});

module.exports = UserModel;