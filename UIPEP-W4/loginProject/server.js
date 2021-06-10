//import modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./model/model');

// database
mongoose.connect("mongodb://localhost:27017/Registration", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
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

// middleware npm install bcryptjs
app.use('/public', express.static('public'));
app.use(express.json());


app.get('/', (req,res) => {      ///^\/login[\w]*/
    res.sendFile('./login.html',{root: __dirname});
});

app.post('/', (req,res) => {      ///^\/login[\w]*/
    res.json({status: 'ok', data: 'Coming Soon'});
});

app.get(/^\/home[\.]*[html|htm|hml]*/, (req,res) => {   
    res.sendFile('./home.html',{root : __dirname});
})

app.get(/^\/signup[\.]*[html|htm|hml]*/, (req,res) => {
    res.sendFile('./signup.html',{root: __dirname});
})

app.post(/^\/signup[\.]*[html|htm|hml]*/,async (req,res) => {

    const {
        fNameValue: firstName, 
        lNameValue: lastName, 
        emailIdValue: emailId, 
        usernameValue: username, 
        passOneValue: passwordHash 
    } = req.body;

    let password = await bcrypt.hash(passwordHash, 10);

    try {
        const result = await User.create({
            firstName,
            lastName,
            emailId,
            username,
            password
        })
        console.log(`User successfully created: \n`,result);
        res.json({status: 'ok'});
    } catch(error) {
        if(error.code === 11000) {
            return res.json({status: 'error', error: `Username is already in use`});
        }
        throw error;
    }
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

