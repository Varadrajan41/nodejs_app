const http= require("http")

const server= http.createServer((req,res)=>{
    res.end('hello i am server')
})

server.listen(8000,()=>{
    console.log('serever running on 8000')
})