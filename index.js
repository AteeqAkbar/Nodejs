const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {

        res.setHeader("content-Type", "text/html")
        res.write('hallo from root')
        res.end()
        console.log("hallo from root");

    }
    if (req.url === '/products') {

        // res.write('hallo from products')
        res.setHeader("content-Type", "application/json")

        res.write(JSON.stringify([{ id: 2 }]))

        res.end()
        console.log("hallo from products");

    }


})
server.listen(3000, "localhost", console.log("server port 3000"))//http:///localhost:3000/