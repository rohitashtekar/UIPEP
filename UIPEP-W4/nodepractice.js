// let message = 'Hello World';
// console.log(message);

// const {reverse} = require("./reverse");

// let argument = process.argv[2];

// console.log(reverse(argument));

//-server--
const http = require("http");

const server = http.createServer( (req, res) => {
    console.log(`User visited ${req.url}`);
    res.end(`Hello! Good day to you`);
});

console.log(`Listening on http://localhost:5500`);
server.listen(5500);
