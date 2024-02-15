const http = require('http');

const server = http.createServer((req,res) => {
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end("her is our short history")
}
res.end(`
<h1> Oops!</h1>
<p>We can't see to find your page</p>
<a href = '/'> Back home</a>`)
})

server.listen(5000)