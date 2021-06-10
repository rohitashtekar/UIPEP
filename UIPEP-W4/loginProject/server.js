const express = require('express');
const app = express();
const mongoose = require('mongoose');

// database
mongoose.connect("mongodb://localhost:27017/Registration", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, 
(error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log('DB Connected');
    }
});

const port = process.env.PORT || 3000;

// middleware
app.use('/public', express.static('public'));
app.use(express.json());


app.get('/', (req,res) => {      ///^\/login[\w]*/
    res.sendFile('./login.html',{root: __dirname});
});

app.get(/^\/home[\.]*[html|htm|hml]*/, (req,res) => {   
    res.sendFile('./home.html',{root : __dirname});
})

app.get(/^\/signup[\.]*[html|htm|hml]*/, (req,res) => {
    res.sendFile('./signup.html',{root: __dirname});
})

app.post(/^\/signup[\.]*[html|htm|hml]*/, (req,res) => {
    console.log(req.body);
    res.json({status : 'ok'});
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./404.html', {root: __dirname})
})

app.listen(port, (error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Listening on port: http://localhost:${port}`);
})

