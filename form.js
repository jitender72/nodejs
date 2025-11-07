import http from "http";
import fs from "fs";
// get data from html file
http
  .createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, "server error", { "content-type": "text/plain" });
        res.end();
        return;
      } else {
        res.writeHead(200, "success", { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(3000);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     // knha par submit hua hai ye check kren k liye
//     // console.log(req.url);
//     if (req.url == "/") {
//       res.write(`
//         <form action="/submit" method="POST" >
//         <input type="text" placeholder="enter name"/>
//          <input type="email" placeholder="enter email"/>
//         <button>click<button/>
//         <form/>
//         `);
//     } else if (req.url == "/submit") {
//       res.write("<h1>form submit</h1>");
//     }

//     res.end();
//   })
//   .listen(5000);
