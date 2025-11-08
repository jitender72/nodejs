import http from "http";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "website", "Home.html");
console.log(filePath);

http
  .createServer((req, res) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal Server Error: Could not load Home.html");
        return;
      }
      res.write(data);
      res.end();
    });
  })
  .listen(3200, () => {
    console.log("Server listening on port 3200");
  });
