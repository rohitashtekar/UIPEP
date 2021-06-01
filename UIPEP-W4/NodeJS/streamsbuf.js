const fs = require('fs');

const readStreams = fs.ReadStream('./NodeJS/file.txt');
const writeStreams = fs.WriteStream('./NodeJS/file1.txt');

// readStreams.on('data',(chunk) => {
//     console.log('----New Chunk----');
//     console.log(chunk);

//     writeStreams.write('\n------NEW CHUNK------\n');
//     writeStreams.write(chunk);
// });

// piping
readStreams.pipe(writeStreams);