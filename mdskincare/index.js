
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
app.get('/', (req,res) => { 
    res.render('moblieHome');
});
app.get('/md-skincare-cream', (req,res) => { 
    res.render('order');
});

app.listen(PORT ,()=> console.log("Server Start Port 5565"));