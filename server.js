const express = require("express");
const mongoose = require('mongoose');
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;

//required dotenv to enable environmental variables
require('dotenv').config({path:'.env'})

// Define Express middleware to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (for example on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const dbConnect = async () => {

    // try to connect to the database and log connection
    try {
      
      // const conn = await mongoose.connect( "mongodb://localhost/plantdear", {
        const conn = await mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/plantdear", {
              useNewUrlParser: true,
            //   useCreateIndex: true, -- no longer supported
              useUnifiedTopology: true
          });
          
          console.log(`MongoDB Connected: ${conn.connection.host}`)
  
        } catch (err) {
  
        //if connection fails, log the error message in the terminal and shut down process
        console.log(`Error: ${err.message}`);
        process.exit(1);
      }
}
  
dbConnect();

// API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => 
    console.log(`🌎 ==> API server now on port ${PORT}!`))
            