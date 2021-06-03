const express = require('express');

//express app
const app = express();
app.listen(5000, () => {
    console.log('listening on port http://localhost:5000');
});

app.get('/', (req,res) => {
    res.sendFile('./file.txt', {root: __dirname});
});

app.get('/get', (req,res) => {
    res.sendFile('./nodepractice.html', {root: __dirname});
});

app.use((req,res) => {
    res.status(404).sendFile('./404.html', {root: __dirname});
})