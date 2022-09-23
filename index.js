const fxPromises= require('fs').promises
const path = require('path')
//in this operations we see that they are async
//as node is async runtime event driven enviroment
//so some of the methods are async
/*fx.readFile("./files/sample1.txt","utf-8",(err,data)=>{
    if(err) throw err
    console.log(data);
})
//for example
console.log("Hello Aditya");
//if error/exception not caught then exit
process.on('uncaughtException',err=>{
    console.error("There was an uncaught error: "+ err);
    process.exit(1)
})*/
//use path object 
//R/W operations in NODE.JS
/*fx.readFile(path.join(__dirname,"files","sample2.txt"),"utf-8",(err,data)=>{
    if(err) throw err
    console.log(data);
})*/
//for example

//write to the file
/*fx.writeFile(path.join(__dirname,"files","sample3.txt"),"Nice to meet you",(err)=>{
    if(err) throw err
    console.log("Write complete")
})
//we can control async nature with callbacks
//here we see callback after callback this results in callbacks hell
fx.writeFile(path.join(__dirname,"files","test.txt"),"Creating and updating a file using appendFile",(err)=>{
    if(err) throw err
    console.log("Write Compelete");
    fx.appendFile(path.join(__dirname,"files","test.txt"),"Creating and updating a file using appendFile this is part of the R/W functionality of Node",(err)=>{
        if(err) throw err
        console.log("Append Compelete");
        fx.rename(path.join(__dirname,"files","test.txt"),path.join(__dirname,"files","text.txt"),(err)=>{
            if(err) throw err 
            console.log("renamed");
        })
    })
})

fx.writeFile(path.join(__dirname,"files","sample4.txt"),"This is the 4th file",(err)=>{
    if(err) throw err
    console.log("write completed");
})
//if error/exception not caught then exit
process.on('uncaughtException',err=>{
    console.error("There was an uncaught error: "+ err);
    process.exit(1)

})
*/
//using fsPromise
const fileOps= async ()=>{
    try {//read a existing file
        const data =  await fxPromises.readFile(path.join(__dirname,"files","sample2.txt"),"utf-8")
       console.log(data);
    
       //write ,append, rename a new file 
       await fxPromises.writeFile(path.join(__dirname,"files","promiseWrite.txt"),data)
       await fxPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),"\nYo man")
       await fxPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseRenamed.txt'))
       //and read the data from the new file
       const newData =  await fxPromises.readFile(path.join(__dirname,"files","promiseRenamed.txt"),"utf-8")
       console.log(newData);
       //deleting a file
       await fxPromises.unlink(path.join(__dirname,"files","sample2.txt"))
    } catch (error) {
        console.log(error);
    }
}

fileOps()