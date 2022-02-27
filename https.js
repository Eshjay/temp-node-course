const http = require('http')



const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home Page")
    }
    if(req.url === '/about'){
        res.end("ABout us")
    }
    res.end("Error Page Bro!")
})

server.listen(5000, ()=>{
    console.log('Server is listening at port 5000....')
})