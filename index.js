var http = require('http');
var fs = require('fs');
const { Server } = require('https');
const host = '127.0.0.1'
const PORT = 8080;

fs.readFile('./index.html', function (request,response) {
  if (err) throw err;
  Server.listen(2022, host , '' function () {
    console.log (`'server menyala di ${host}:${port}'`);
  })
        
   