const express = require('express');
const route = express.Router();


/** 
* @swagger
* /api/v1/clients:
*   get:
*       description: get issues from jira and add issues to jira
*       response:
*           '200': good response
*
*/
route.get("/", (req, res) => {
    res.json({
        "clients": [

        ]
    })
})

module.exports = route;