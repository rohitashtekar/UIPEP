const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (error, data) => {
//     if(error){
//         console.log(error);
//     }
//     console.log(data);
// })

// fs.writeFile('./NodeJS/file1.txt', 'Life is Beautiful', () => {
//     console.log('file was written');
// })

if(!fs.existsSync('./Node')){
    fs.mkdir('./Node', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })    
}
else {
    fs.rmdir('./Node', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
};

