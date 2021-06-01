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
const fs = require('fs');

const server = http.createServer( (req, res) => {
    console.log(`User visited ${req.url}, Method : ${req.method}`);

    res.setHeader('Content-Type','text/html');

    let path = './';
    switch(req.url) {
        case '/': 
            path += 'events.html';
            res.statusCode = 200;
            break;
        case '/events.js': 
            res.statusCode = 301;
            res.setHeader('Location', '/')
            break;
        case '/getpost':
            path += 'getpost.html';
            res.statusCode = 200;
            break;
        case '/getpost.html':
            res.statusCode = 301;
            res.setHeader('Location','/getpost')
            break;
        case '/game':
            path += 'game.html';
            res.statusCode = 200;
            break;
        case '/game.html':
            res.statusCode = 301;
            res.setHeader('Location', '/game');
            break;
        default :
            path += '404.html';
            res.statusCode = 404    ;
            break;
    }
    // res.write(`<h1>Hello, How are you doing?</h1><br>`);
    // res.write(`<i>Bye! Good day to you</i>`);

    fs.readFile(path, (err,data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, () => {
    console.log(`Listening for requests on http://localhost:3000`);
});


