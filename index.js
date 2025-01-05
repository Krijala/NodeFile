//create
const fileSystem = require("fs");
fileSystem.writeFile("hello.txt", "BCSIT  Students", function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});

//add
const fileSystem = require("fs");
fileSystem.appendFile("hello.txt", "200", function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});

//rename file

const fileSystem = require("fs");
fileSystem.rename("hello.txt", "files.txt", function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});


//Delete file = unlink

const fileSystem = require("fs");
fileSystem.unlink("files.txt", function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});

//remove directory = rmdir
const fileSystem = require("fs");
fileSystem.rmdir("folder", function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});

//folder with files delete = rmdir or rm
const fileSystem = require("fs");
fileSystem.rm("folder",{recursive: true}, function (error) {
  if(error) console.log(error);
  else console.log("File Created Successfully");
});


const http =require("http");
const server = http.createServer(function(req,res){
  res.end("Hello World");
})
server.listen(3000);


const http = require("http");
const servers= http.createServer(function(req,res){
  res.end("Krijala");
})
servers.listen(4000);

//read the file
const fileSystem = require("fs");
fileSystem.readFile("hellowrld.txt", "utf8",function (error, content) {
  console.log(content);
});
