const express = require("express");
// const routes = require("./routes");

const path = require("path");
const PORT = process.env.PORT || 3001;

//required dotenv to enable environmental variables such as MONGO_URI
require('dotenv').config({path:'.env'})

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes here
// app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});