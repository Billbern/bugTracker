const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerjsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 23556;

// swagger configuration
const swaggerOptions = {
    definition: {
        info : {
            title: "Issue Tracker",
            description: "Issue Tracking with some issue",
            contact: {
                name: ""
            }, 
            servers: ["http://localhost:23556"] 
        }
    },
    apis: ["./routes/*-route.js"],
    failOnErrors: true
}

const swaggerDocs = swaggerjsDoc(swaggerOptions);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// routes
const routes = {
    clients: require('./routes/client-route'),
    issues: require('./routes/issues-route')
}
app.use('/api/v1/issues', routes.issues)
app.use('/api/v1/client', routes.clients)

app.listen(port, () => {
    console.log("Server is running on\n\nhttps://localhost:23556");
})