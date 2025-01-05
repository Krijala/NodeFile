const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //url coming from request
  const url = req.url;
  let filePath;
  if (url === "/") {
    filepath = "index.html";
  } else if (url === "/about") {
    filepath = "about.html";
  } else {
    filepath = "404.html";
  }
  fs.readFile(filepath, "utf8", function (error, content) {
    if (error) {
      res.end("Sever Error");
    } else {
      res.end(content);
    }
  })
})
server.listen(3390);
