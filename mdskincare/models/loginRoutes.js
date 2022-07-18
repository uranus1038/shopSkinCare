require('../Database')
const bcrypt = require('bcrypt');
const userAdminX = require('../models/dataAdmin');
const dataUser = require('../models/dataUser');
const express = require('express');
const { render } = require('ejs');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
 userAd = app.post('/',async (req,res) => {
                const { userName, passWord } = req.body;
               const user = await userAdminX.findOne(
                {
                    name : userName ,
                }
               )
               const allUsers = await dataUser.find({});
               
               if(user)
               {
                    const isCorrect = bcrypt.compareSync(passWord, user.password);
                    if(isCorrect)
                    {
                         return res.render('adminTool',{data : allUsers});
                    }
                    else
                    {
                        return res.redirect('/Admin');
                    }
               } else
               {
                return res.redirect('/Admin');
               }
            })
module.exports = userAd ; 