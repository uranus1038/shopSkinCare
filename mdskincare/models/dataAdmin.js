const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    password : String
  });
  
  const UserAdmin = mongoose.model('userAdminX', userSchema);
  
  module.exports = UserAdmin;