const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();

const User = require("../models/users");
const generateAccessToken = require("../utils/token-utils");

/** 
* @swagger
* /auth/login:
*   post:
*       description: 
*           create access token for accessing other routes.
*       response:
*           '200': good response
*           '400': username or password incorrect
*
*/
route.post("/login", async(req, res) => {
    if(req.body.username && req.body.userpass){
        const user = await User.findOne({ name: req.body.username })
        if(user){
            const match = await bcrypt.compare(req.body.userpass, user.password)
            if(match){
                const userId = {"userId": user._id.toString()};
                const accesstoken = generateAccessToken(userId);
                res.json({
                    'accessToken': accesstoken,
                    'user': user
                })
            }else{
                res.status(400).json({"message": "username or password incorrect"})
            }
        }else{
            res.status(400).json({
                "message": "username or password incorrect"
            })
        }
    }
})


/** 
* @swagger
* /auth/register:
*   post:
*       description: 
*           create users who can access the platform
*       response:
*           '200': good response
*           '400': username or password incorrect
*           '500': server error
*
*/
route.post("/register", async (req, res) => {
    if(req.body.username && req.body.userpass && req.body.usertype){
        const verifyuser = await User.findOne({"name": req.body.username});

        if(!verifyuser){
            try {
                const salt = await bcrypt.genSalt(10)
                const passhash = await bcrypt.hash(req.body.userpass, salt);
                if (passhash){
                    const newUser = new User({name: req.body.username, password: passhash, usertype: req.body.usertype})
                    await newUser.save()
                    res.status(200).json({
                        "message": "successful"
                    })
                }
            } catch (err) {
                console.log(err);
                res.status(500).json({
                    "message": "server error"
                })
            }
        }else{
            res.status(400).json({
                "message": "user already exists"
            })
        }
    }
})

module.exports = route;