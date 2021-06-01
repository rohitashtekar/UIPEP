// let message = 'Hello World';
// console.log(message);

// const {reverse} = require("./reverse");
// let argument = process.argv[2];
// console.log(reverse(argument));

//-module--exports
// const calc = require('./reverse.js')
// let res;
// let res1;
// res = calc.addition(5,6);
// res1 = calc.sub(67,21);
// console.log(res);
// console.log(res1);



//-server--
const http = require("http");

const server = http.createServer( (req, res) => {
    console.log(`User visited ${req.url}, Method : ${req.method}`);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`Hello! Good day to you`);
});

console.log(`Listening on http://localhost:5500`);
server.listen(5500);


