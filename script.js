const http = require("http");
const fs = require("fs");
  http.createServer((req, res) => {
    if (req.url === "/index.html") {
      fs.readFile("index.html", "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("404: File is Not Found");
        } else {
          res.writeHead(200), { "Content-Type": "text/html" };
          res.write(data);
          res.end();
        }
      });
    } else if (res.url) {
      res.writeHead(404);
      res.end("404: File is Not Found");
    }
  }).listen(3000);
console.log("Server running at http://localhost:3000/");
