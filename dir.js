const fs = require('fs')
//to not the overwrite the file/directory again and again
//we use existsSync method
//if it exists create it ,if it is there donot 
if(!fs.existsSync('./new')){
 fs.mkdir("./new",(err)=>{
     if(err) throw err;
     console.log("Directory created");
 })
}
//if it is present then go ahead and delete it
if(fs.existsSync('./new')){
    fs.rmdir("./new",(err)=>{
        if(err) throw err;
        console.log("Directory removed");
    })
}
   
process.on('uncaughtException',err=>{
    console.error("There was an uncaught error: "+ err);
    process.exit(1)

})