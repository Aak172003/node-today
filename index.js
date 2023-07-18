const http = require('http');

const serveStatic = require('./static-file')

function handleRequestAndResponse(req, res) {
    console.log('Request and Response..');

    // response write on client 

    serveStatic(res)
}

const server = http.createServer(handleRequestAndResponse);
server.listen(1234, (err) => {
    if (err) {
        console.log('Server Crash', err);
    }
    else {
        console.log('Server start')
    }
});
