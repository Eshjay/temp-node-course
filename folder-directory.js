const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        console.log(req)
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page your looking for</p>
        <a href="/">Back Home wa</a>
       `)
})

server.listen(5000);