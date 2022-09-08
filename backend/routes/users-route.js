const express = require('express');
const bcrypt = require('bcrypt');
const route = express.Router();
 const User = require("../models/users");

/** 
* @swagger
* /auth:
*   post:
*       description: authenticate user
*       response:
*           '200': good response
*
*/
route.post("/login", async(req, res) => {
    if(req.body.username && req.body.userpass){
        const user = await User.findOne({ name: req.body.username })
        if(user){
            const match = await bcrypt.compare(req.body.userpass, user.password)
            if(match){
                
            }
        }
        res.json({
            username: req.body.username,
            userpass: req.body.userpass
        })
    }
})

route.post("/create-user", (req, res) => {
    
    res.json()
})

module.exports = route;