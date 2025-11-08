import http from "http";
import fs from "fs";
import querystring from "querystring";
// get data from html file
http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("html/form.html", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.write("server error");
          res.end();
          return;
        }
        res.write(data);
        res.end();
      });
    } else if (req.url === "/submit") {
      res.write("form submitted");
      res.end();
    }
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
