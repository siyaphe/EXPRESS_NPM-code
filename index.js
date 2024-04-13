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

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  
    res.statusCode = 200;  
    res.setHeader('Content-Type', 'text/html');  
    res.write('<h1 style="color: red">Hello World!</h1>'); 
    res.write('<p>I wonder what else we can send...</p>');  res.end();});


server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);
});