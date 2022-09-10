const express = require('express');
const sendgrid = require('@sendgrid/mail');
const route = express.Router();

const User = require("../models/users");
const Client = require("../models/client");
const generateAccessToken = require('../utils/token-utils');


/** 
* @swagger
* /api/v1/clients:
*   get:
*       description: get all clients 
*       response:
*           '200': good response
*
*/
route.get("/", async(req, res) => {
    const data = await Client.find({});
    res.json({
        clients: data
    })
})

/** 
* @swagger
* /api/v1/clients:
*   post:
*       description: add clients to dashboard
*       response:
*           '200': good response
*           '400': bad request
*
*/
route.post("/", async(req, res)=>{
    const checkUser =  await User.findOne({ name: req.body.client_mail });
    const checkClient = await Client.findOne({ email: req.body.client_mail })

    if (!checkUser && !checkClient){
        const newUser = new User({ name: req.body.client_mail, password: generateAccessToken(), usertype: "client"})
        await newUser.save();

        const newClient = new Client({email: req.body.client_mail, organisation: req.body.client_organ, user: newUser._id})
        await newClient.save();



        res.status(200).json({
            "message": "client successfully"
        })

    }else{
        res.status(400).json({
            "message": "client already exists"
        })
    }

})

module.exports = route;