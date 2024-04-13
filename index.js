// a) npm init -y    ----> package.json*
// b) npm i {{dependencyName }} ----> package.LOCK.json* && node_modules
// if()--> dependency != installed:
//mac: [sudo npm i whateverDepName]
// c) change "start" script in package.json to use nodemon
//  "start": "nodemon whateverFile.js"
// d) open a main file (server.js ) ----vvvvvvv-------

// ---------------------------------[Setup]

// --> (?) THE BIG 3 ------- runningTheServer
// 1. use require statements to import all of the needed depend/libs for the app.
const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || "3000";
const app = express();
// 2. initializing express to run





// ----------------------------{MiddleWare}-----------

app.use(body-parser)

// --------------------------------------------------


app.get("/", (req,res) => {
    res.send("This is the homepage")
});

app.get("/about/:title", (req, res) => {
    // res.send("This is the About")   
    res.send(`This is the title :  ${req.params.title}`)
});

app.get("/test", (req, res) => {
    res.send("This is a TEST")
});
// ---------------------------------[REST ROUTES]






// app.post()
// HTTPMETHODS = get, post, put ,delete
// ---------------------------------------[Routes]

app.listen(PORT, (req, res) => {
  console.log(`Currently Listening on ${PORT}`);
});
// Creating the express server. and the port to run it on