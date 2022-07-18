const express = require('express');
const path = require('path');
const app = express();
const OrderX = require('./models/orderUser');
const userAdmin = require('./models/loginRoutes');
const trackingX = require('./models/tracking');
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/C5S'))
app.use(express.static(__dirname + '/C5S/orderRenderCss'))
app.use(express.static(__dirname + '/J5'))
app.use(express.static(__dirname + '/IMG'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
let PORT = process.env.PORT || 8000 ;

// const Aumx = new User({name:'Aum'});
// Aumx.save().then(()=>{console.log("success")});

app.use('/order',OrderX) ;
app.use('/admin-tool',userAdmin) ;
app.use('/parcel-tracking',trackingX) ;
app.get('/', (req,res) => { 
    res.render('moblieHome');
});
app.get('/Admin', (req,res) => { 
    res.render('Admin');
});

app.get('/md-skincare-cream', (req,res) => { 
    res.render('order');
});
app.get('/test-Confirm', (req,res) => { 
    res.render('orderConfirm');
});

app.listen(PORT ,()=> console.log("Server Start Port 8000"));