require('../Database')
const dataUser = require('../models/dataUser')
const express = require('express');
const {body , validationResult} = require('express-validator');
const { render } = require('ejs');
const app = express();
app.use(express.urlencoded({extended : false}));

tracking = app.get('/', (req,res)=>{
    res.render('tracking_f1');
})
module.exports = tracking ; 
