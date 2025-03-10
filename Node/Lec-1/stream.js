const fs = require("fs")

// Creating a readable stream to read from 'lorem.txt'
const rs = fs.createReadStream("./files/lorem.txt" , {encoding: 'utf8'}); 

// Creating a writable stream to write to 'new.lorem.txt'
const ws = fs.createWriteStream("./files/new.lorem.txt");

// When data is read from the readable stream, it's passed as chunks to the writable stream
rs.on('data', (dataChunk)=> {
    ws.write(dataChunk);
});
