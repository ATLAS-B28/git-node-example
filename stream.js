//If a file has a large data so it is difficult to
//grab such a large data is not good practice 
//therefore we use the stream
//this objects allow 4 types of streams
//writable, readable, duplex(stream which can be used for both R/W operation), transform(type of duplex where output is computed based on input)
const fs = require('fs')
//createReadStream with path too or hard code it
const rs = fs.createReadStream('./files/sample3.txt',{encoding:'utf8'})
const ws = fs.createWriteStream("./files/newsample3.txt")
/*rs.on('data',(data)=>{
    ws.write(data)
})*/





rs.pipe(ws)



