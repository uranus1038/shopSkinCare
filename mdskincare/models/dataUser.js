const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  tel : String, 
  address : String , 
  province : String ,
  district : String , 
  county : String , 
  postalcode : String , 
  email : String , 
  line : String  

 
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;