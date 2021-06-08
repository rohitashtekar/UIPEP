// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.homedir());
// console.log(os.type());
// console.log(os.cpus());
// console.log(os.totalmem());

// const url = require('url');

// const myUrl = new URL("https://reqres.in/api/users?page=2");

// console.log(myUrl.href);
// console.log(myUrl.host);
// console.log(myUrl.pathname);
// console.log(myUrl.origin);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);

// myUrl.searchParams.append('abs',123);
// console.log(myUrl.searchParams);

const express = require('express');
const app = express();
const path = require('path');
let port = process.env.PORT || 5000;

app.use(express.static('../weatherapp/public'))
app.use(express.static('../weatherapp/public/icons'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'../weatherapp/weather.html'));
})

app.all('*', (req,res) => {
    res.send(`404 <br> Not found`);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
