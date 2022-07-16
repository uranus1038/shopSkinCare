require('../Database')
const dataUser = require('../models/dataUser')
const express = require('express');
const {body , validationResult} = require('express-validator');
const { render } = require('ejs');
const app = express();
app.use(express.urlencoded({extended : false}));
var dataUserXY;
const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
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
        req.body.code = "DOM" + generateNumber(100000,900000);
        (req.body.email=="") ? req.body.email = "ไม่ได้ป้อนข้อมูล" : req.body.email ; 
        (req.body.line =="") ? req.body.line  = "ไม่ได้ป้อนข้อมูล" : req.body.line ; 
        dataUserXY = req.body ;
        
        await res.render('orderConfirm',
        {
            dataUserX : req.body,
        });
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
    const codeX =  dataUser.findOne({dataUserXY})
    if(codeX.code == dataUserXY.code)
    {
        return res.redirect("/");
    }
    else
    {
          const userData = new dataUser(dataUserXY);
          await userData.save();
          res.render('success',{dataUser : dataUserXY});
    }
})

module.exports = order;
module.exports = success;