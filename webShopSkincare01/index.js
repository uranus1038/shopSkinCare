
const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({extended : false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
let PORT = process.env.PORT || 5565 ;
app.get('/', (req,res) => {
    res.render('moblie_home');
});

app.listen(PORT ,()=> console.log("Server Start Port 5565"));