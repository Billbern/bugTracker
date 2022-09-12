const express = require('express');
const route = express.Router();
const Issues = require("../models/issues");


/** 
* @swagger
* /api/v1/issues:
*   get:
*       description: get all issues from jira
*       response:
*           '200': good response
*
*/
route.get("/", (req, res) => {
    
    res.json({
        "issues": [

        ]
    })
})

/** 
* @swagger
* /api/v1/issues:
*   post:
*       description: get all issues from jira
*       response:
*           '200': good response
*
*/
route.post("/", (req, res)=>{
    console.log(req.body);
})

module.exports = route;