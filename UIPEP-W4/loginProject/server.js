let path = require('path');
let express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if(error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Listening on port: http://localhost:${port}`);
})


app.use(express.static('./public'));
console.log(staticPath);

app.get('/', (req,res) => {
    res.sendFile('/home.html',{root : __dirname});
});

app.get('/login', (req,res) => {
    res.sendFile('/login.html',{root: __dirname});
})

app.get('/signup', (req,res) => {
    res.sendFile('/signup.html',{root: __dirname});
})

app.use((req, res) => {
    res.status(404).sendFile('/404.html', {root: __dirname})
})
// \Users\USER\Documents\GitHub\UIPEP-Internship\UIPEP-W4