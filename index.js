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

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {  
//     res.statusCode = 200;  
//     res.setHeader('Content-Type', 'text/html');  
//     res.write('<h1 style="color: red">Hello World!</h1>'); 
//     res.write('<p>I wonder what else we can send...</p>');  res.end();});


// server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);
// });


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