const express = require('express');
const bcrypt = require("bcrypt");
const sgMail = require('@sendgrid/mail');
const route = express.Router();

const User = require("../models/users");
const Client = require("../models/client");


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

        let newUser;
        let newClient;
        
        try {
            const salt = await bcrypt.genSalt(10)
            const passhash = await bcrypt.hash(req.body.password, salt);

            newUser = new User({ name: req.body.client_mail, password: passhash, usertype: "client"})
            await newUser.save();

            newClient = new Client({email: req.body.client_mail, organisation: req.body.client_organ, user: newUser._id})
            await newClient.save();

            const msg = {
                from: process.env.SENDGRID_SENDER, // verified sender email
                to: req.body.client_mail, // recipient email
                subject: "Your new account login details", // Subject line
                text: `Hello ${ req.body.client_mail.split("@")[0] },\nWelcome to Issue Tracker Application your account logins are\n username: ${req.body.client_mail}\n password: ${req.body.password}\nPlease do well to change password after first login`, // plain text body
                html: `<h4>Hello ${ req.body.client_mail.split("@")[0] }</h4>
                        <div>
                            <p>Welcome to Issue Tracker Application your account logins are</p>
                            <p>username: ${req.body.client_mail}</p>
                            <p>password: ${req.body.password}</p>
                            <p style="font-size: 14px">Please do well to change password after first login</p>
                        </div>
                `, // html body
            }
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            await sgMail.send(msg)

            res.status(200).json({
                "message": "client successfully"
            })
        } catch (error) {
            console.log(error);
            if(newUser){
                await User.findByIdAndDelete({_id: newUser._id});
            }
            if(newClient){
                await Client.findByIdAndDelete({_id: newClient._id});
            }
            res.status(500).json({
                "message": "server error, error is being worked on"
            })
        }

    }else{
        res.status(400).json({
            "message": "client already exists"
        })
    }

})

module.exports = route;