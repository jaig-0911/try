const express = require('express')
const http = require('http')
const app = express()
// const fs = require('fs')
// const path  = require('path')
const morgan = require('morgan')

const hostname = 'localhost';
const port = 3000;
app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // var filePath = path.resolve('./public/error.html')
    // fs.createReadStream(filePath).pipe(res);
    res.end('<html><body><h1>hello</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})
