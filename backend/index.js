require("dotenv").config();

const express = require('express');
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const swaggerjsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 23556;


mongoose.connect(process.env.DATABASE_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }    
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("connected successfully");
})


// swagger configuration
const swaggerOptions = {
    definition: {
        info : {
            title: "Issue Tracker",
            description: "Issue Tracking with some issue",
            contact: {
                name: ""
            }, 
            servers: [`http://localhost:${port}`] 
        }
    },
    apis: ["./routes/*.js"],
    failOnErrors: true
}
const swaggerDocs = swaggerjsDoc(swaggerOptions);

app.use(express.json())
// serve authentication and api routes
const routes = {
    clients: require('./routes/client-route'),
    issues: require('./routes/issues-route'),
    authentication: require('./routes/users-route')
}
app.use('/api/v1/issues', routes.issues)
app.use('/api/v1/client', routes.clients)
app.use('/auth', routes.authentication)

// serve documentation on initial route
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`Server is running on\n\nhttp://localhost:${port}`);
})