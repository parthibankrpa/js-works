var http = require("http");

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plan'});
    res.end("hi there");
});

server.listen(3000,"127.0.0.1");
console.log("listening in port 3000");