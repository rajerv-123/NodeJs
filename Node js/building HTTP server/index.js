const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home page");
        res.end("Home page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`I'm Rajeev", ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("there are your results for " + search);
      case "/signup":
        if (req.method === "GET") res.end("this is signup form");
        else if (req.method === "POST") {
          res.end("Success");
        }
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!"));
