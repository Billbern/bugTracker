const express = require('express');
const route = express.Router();
const Issues = require("../models/issues");


/** 
* @swagger
* /api/v1/project:
*   get:
*       description: get all issues from jira
*       response:
*           '200': good response
*
*/
route.get("/", (req, res) => {
    
    res.json({
        "projects": [

        ]
    })
})


module.exports = route;