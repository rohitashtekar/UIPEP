let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Listening on port: http://localhost:${port}`);
})

app.use('/public', express.static('public'));

app.get('/', (req,res) => {
    res.sendFile('./home.html',{root : __dirname});
});

app.get(/^\/login[\w]*/, (req,res) => {
    res.sendFile('./login.html',{root: __dirname});
})

app.get(/^\/signup[\w]*/, (req,res) => {
    res.sendFile('./signup.html',{root: __dirname});
})

app.use((req, res) => {
    res.status(404).sendFile('./404.html', {root: __dirname})
})
