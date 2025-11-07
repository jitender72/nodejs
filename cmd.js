import http from "http";
// console.log("cmd ");
// get input from cmd or terminal after run "node server.js" "something here"
// console.log(process.argv[2]);
// console.log(process.argv);

const port = process.argv[2];
http
  .createServer((req, res) => {
    res.write("testing input from cmd or terminal");
    res.end();
  })
  .listen(port);
