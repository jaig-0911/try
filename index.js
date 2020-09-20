const express = require('express')
const http = require('http')
const app = express()
// const fs = require('fs')
// const path  = require('path')
const morgan = require('morgan')

const hostname = 'localhost';
const port = 3000;
app.use(morgan('dev'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const disRouter = require('./routes/disRoutes')
app.use('/dishes', disRouter)


app.use(express.static(__dirname + '/public'))


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})
