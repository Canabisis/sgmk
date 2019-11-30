const http = require('http');
const pid = process.pid;
http
    .createServer((req, res) => {
        res.end(`Hello`);
    })
    .listen(8800, () => {
        console.log(`Worker started. Pid: ${pid}`);
    });