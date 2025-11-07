import os from "os";
import http from "http";
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(process.pid);
// console.log(process.cwd());
const age = 29;
http
  .createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    res.write(
      `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>server</title>
        </head>
        <body>
            <p>welcome to our server</p>
            <h1>` +
        age +
        `</h1>
        </body>
        </html>
        `
    );
    res.end();
  })
  .listen(4800);
