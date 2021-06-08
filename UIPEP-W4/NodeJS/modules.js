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

// const express = require('express');
// const app = express();
// const path = require('path');
// let port = process.env.PORT || 5000;

// app.use(express.static('../weatherapp/public'))
// app.use(express.static('../weatherapp/public/icons'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'../weatherapp/weather.html'));
// })

// app.all('*', (req,res) => {
//     res.send(`404 <br> Not found`);
// })

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`);
// });

// const {readFile} = require('fs');

// const getText = (path) => {
//     return new Promise( (resolve, reject) => {
//         readFile(path,'utf-8', (err, data) => {
//             if(err) reject(err);
//             resolve(data);
//         })
//     })
// }

// getText('./file.txt')
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })

// const start = async() => {
//     const fileGet = await getText('./file.txt');
//     console.log(fileGet);
// };

// start()

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', () => {
//     console.log(`Data recieved`);
// });

// customEmitter.on('response', () => {
//     console.log(`Data recieved again`);
// });

// customEmitter.emit('response');
// customEmitter.emit('response');
// customEmitter.emit('response');

// const express = require('express');
// const app = express();
// const path = require('path');
// const {products} = require('./data')

// let port = process.env.PORT || 5000;

// app.get('/', (req,res) => {
//     res.send(`<h1>Home Page</h1><br><p><a href="/products">Products</a></p>`);
// });

// app.get('/products', (req,res) => {
//     const newProducts = products.map((product) => {
//         const {id,name,image,price} = product;
//         return {id, name, image, price}
//     })
//     res.json(newProducts);
// });

// app.get('/products/:productID', (req,res) => {
//     // console.log(req);
//     // console.log(req.params);
//     const {productID} = req.params;
//     const singleProd = products.find((products) => products.id === Number(productID));

//     if(!singleProd){
//         return res.status(404).send('Product does not exist!');
//     }
//     res.json(singleProd);
// })

// app.get('/products/:productID/reviews/:reviewID', (req,res) => {
//     let data = req.params;
//     res.send(data);
// })

// app.get('/v1/query', (req,res) => {
//     console.log(req.query);
//     const {search,limit} = req.query;

//     let sortedProd = [...products];

//     if(search) {
//         sortedProd = sortedProd.filter((product) => {
//             return product.name.startsWith(search);
//         });
//     }
//     if(limit) {
//         sortedProd = sortedProd.slice(0,Number(limit));
//     }
//     res.status(200).json(sortedProd);
// });

// app.all('*', (req,res) => {
//     res.send(`404 <br> Not found`);
// });

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 5000;

const logger = (req, res, next) => {
    let time = new Date().getFullYear();
    let method = req.method;
    let url = req.url;
    console.log(method, time, url);
    next();
}

app.get('/', logger, (req,res) => {
    res.send(`<h1>Home Page</h1><br><p><a href="/products">Products</a></p>`);

});

app.get('/about', (req,res) => {
    res.send(`<h1>About Page</h1><br><p><a href="/products">Products</a></p>`);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
