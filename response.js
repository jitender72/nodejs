import http from "http";

const userData = [
  {
    name: "jitender",
    email: "jitender@gmail.com",
  },
  {
    name: "ankitr",
    email: "ankit@gmail.com",
  },
  {
    name: "rishab",
    email: "rishbah@gmail.com",
  },
  {
    name: "prince",
    email: "prince@gmail.com",
  },
];

http
  .createServer((req, res) => {
    console.log(req.method);

    if (req.url == "/") {
      res.setHeader("Content-Type", "application/JSON");
      res.write(JSON.stringify(userData));
    } else if (req.url == "/login") {
      res.write("<h1>login page</h1>");
    } else {
      res.write("<h1>other page page</h1>");
    }

    res.end();
  })
  .listen(5300);
