const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dom445565:tesco123@cluster0.zlz9s8j.mongodb.net/hi?retryWrites=true&w=majority'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const UserModel = mongoose.model('Userasd', {name:String});
const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/C5S'))
app.use(express.static(__dirname + '/C5S/orderRenderCss'))
app.use(express.static(__dirname + '/J5'))
app.use(express.static(__dirname + '/IMG'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
let PORT = process.env.PORT || 5565 ;

const Aumx = new UserModel({name:'Aum'});
Aumx.save().then(()=>{console.log("success")});


app.get('/', (req,res) => { 
    res.render('moblieHome');
});
app.get('/md-skincare-cream', (req,res) => { 
    res.render('order');
});
app.post('/order' , async (req,res) =>
{
});
app.listen(PORT ,()=> console.log("Server Start Port 5565"));