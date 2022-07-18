require('../Database')
const bcrypt = require('bcrypt');
const userAdminX = require('../models/dataAdmin')
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
 userAd = app.post('/',async (req,res) => {
                const { userName, passWord } = req.body;
                const passwordHash = bcrypt.hashSync(passWord, 10);
                const userAdmin = new userAdminX({
                name: userName,
                password : passwordHash
            });
                await userAdmin.save();
                res.send('successfuly')
            })
module.exports = userAd ; 