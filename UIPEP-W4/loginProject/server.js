// let express = require('express');
// let app = express();
// const port = process.env.PORT || 3000;

// app.listen(port, (error) => {
//     if(error){
//         return console.log(`Error: ${error}`);
//     }
//     console.log(`Listening on port: http://localhost:${port}`);
// })

// app.use('/css', express.static('css'));

// // \Users\USER\Documents\GitHub\UIPEP-Internship\UIPEP-W4
// app.get('/', (req,res) => {
//     res.sendFile('',{root : __dirname});
// });

// app.get('/login', (req,res) => {
//     res.sendFile('./public/login.html',{root: __dirname});
// })

// app.get('/signup', (req,res) => {
//     res.sendFile('./public/signup.html',{root: __dirname});
// })

// app.get('/profile/:id', (req, res) => {
//     res.send('you requested the profile id '+ req.params.id)
// })

// app.use((req, res) => {
//     res.status(404).sendFile('./public/404.html', {root: __dirname})
// })
console.log(__dirname);