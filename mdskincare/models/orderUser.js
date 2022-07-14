require('../Database')
const dataUser = require('../models/dataUser')
const express = require('express');
const {body , validationResult} = require('express-validator');
const { render } = require('ejs');
const app = express();
app.use(express.urlencoded({extended : false}));

order = app.post('/',
[
    
    body('name' , "* กรุณากรอกชื่อของคุณ!").trim().not().isEmpty()  ,
    body('tel' , "* กรุณากรอกเบอร์โทรให้ถูกต้อง!").trim().isLength({min : 9}),
    body('address' , "* กรุณากรอกที่อยู่ของคุณ!").trim().not().isEmpty(),
    body('province' , "* กรุณากรอกจังหวัดของคุณ!").trim().not().isEmpty(),
    body('district' , "* กรุณากรอกตำบล / แขวง!").trim().not().isEmpty(),
    body('county' , "* กรุณากรอกอำเภอ / เขต!").trim().not().isEmpty(),
    body('postalcode' , "* กรุณากรอกรหัสไปษณีย์ให้ถูกต้อง!").trim().isLength({min : 5}),


] , async (req,res) => {    
    const validation_result = validationResult(req);
    if(validation_result.isEmpty())
    {
        await res.render('orderConfirm',
        {
            dataUserX_name : req.body.name,
            dataUserX_tel:req.body.tel ,
            dataUserX_address: req.body.address,
            dataUserX_province: req.body.province,
            dataUserX_district:req.body.district ,
            dataUserX_county: req.body.county,
            dataUserX_postalcode: req.body.postalcode,
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
module.exports = order;