const http = require('http')
const fs =require('fs')

const port = 3336;

const reqHandler = (req, res) => {
    let filename = ""

    switch (req.url) {
        case '/':
            filename = './index.html';
            break;

        case '/about':
            filename = './about.html';
            break;

        case '/contact':
            filename = './contact.html';
            break;
        case '/blog':
            filename = './blog.html';
            break;

        default:
            filename = './error.html';
            break;
    }
    
    fs.readFile(filename, (err,result) => {
        if (!err){
            res.end(result);
        }
    })
}


const server = http.createServer(reqHandler)

server.listen(port, (err) => {
    if (err) {
        console.log("server not started in port.");
        return false;
    }
    console.log("server start in port:-" + port);
})
