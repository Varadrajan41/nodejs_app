const http = require("http");
const path=require("path")

const server = http.createServer((req,res)=>{
    res.sendFile(path.join(__dirname,"./httpserver/index.html"));
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening the port  8000')
})