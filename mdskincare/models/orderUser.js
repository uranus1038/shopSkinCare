require('../Database')
const dataUser = require('../models/dataUser')
const express = require('express');
const {body , validationResult} = require('express-validator');
const { render } = require('ejs');
const app = express();
app.use(express.urlencoded({extended : false}));
var dataUserX 

order = app.post('/',
[
    
    body('name' , "* กรุณากรอกชื่อของคุณ!").not().isEmpty()  ,
    body('tel' , "* กรุณากรอกเบอร์โทรให้ถูกต้อง!").trim().isLength({min : 9}),
    body('address' , "* กรุณากรอกที่อยู่ของคุณ!").not().isEmpty(),
    body('province' , "* กรุณากรอกจังหวัดของคุณ!").trim().not().isEmpty(),
    body('district' , "* กรุณากรอกตำบล / แขวง!").trim().not().isEmpty(),
    body('county' , "* กรุณากรอกอำเภอ / เขต!").trim().not().isEmpty(),
    body('postalcode' , "* กรุณากรอกรหัสไปษณีย์ให้ถูกต้อง!").trim().isLength({min : 5}),

] , async (req,res) => {    
    const validation_result = validationResult(req);
    if(validation_result.isEmpty())
    {
        const userData = new dataUser(req.body);
        await userData.save();
        
        await res.render('orderConfirm',
        {
            dataUserX : req.body,
            
        });
        (dataUserX) ? dataUserX.email : 'ไม่ได้ป้อนข้อมูล';
        (dataUserX) ? dataUserX.line : 'ไม่ได้ป้อนข้อมูล';
      
       
    }
    else
    {
        let allErrors = validation_result.errors.map((error) =>
            {
                return error.msg;
            }) ; 
            res.render('order',
            {
                register_error : allErrors 
                ,old_data : req.body 
            })
    }
});
success = app.post ('/success', async (req , res) => {
    res.render('success')
})

module.exports = order;
module.exports = success;