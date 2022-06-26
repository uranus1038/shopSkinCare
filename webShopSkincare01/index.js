
const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.get('/', (req,res) => {
    res.render('home');
});

app.listen(5565 ,()=> console.log("Server Start Port 5565"));