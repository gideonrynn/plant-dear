const express = require("express");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;

//required dotenv to enable environmental variables
require('dotenv').config({path:'.env'})

// Define Express middleware to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requires models for syncing with db
const db = require("./models");

// Serve up static assets (for example on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Sync our defined models to the database, clear database (force true)
db.sequelize.sync({force:false})
    .then(() => {

        //start express app
        app.listen(PORT, () => 
            console.log(`🌎 ==> API server now on port ${PORT}!`))
            
});