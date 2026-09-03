const http = require("http");

// http.createServer((req, res) => {
//     res.end("Hello Shubham! My first Server is runing.");
// }).listen(3000);

// http.createServer((req,res) => {
//     console.log("URL :", req.url);
//     console.log("Method : ", req.method);
//     if (req.url == "/about"){
//         res.end("Hello, you are in About Page");
//     }
//     else if (req.url == "/contact"){
//         res.end("Hello, you are in Contact Page");
//     }
//     else if (req.url == "/product"){
//         res.end("Hello, you are in Product Page");
//     }
//     else if (req.url == "/"){
//         res.end("Hello, This is me Shubham! My first Server is runing.");
//     }
//     else{
//         res.writeHead(404);
//         res.end("404 - Page Not Found")
//     }
 
// }).listen(3000);


const users = [
    {
        id: 1,
        name: "Shubham"
    },
    {
        id: 2,
        name: "Rahul"
    }
];

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    }
];

http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("Method:", req.method);

    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to my Mini API");

    } else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is the About Page");

    } else if (req.url === "/users") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));

    } else if (req.url === "/products") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(products));

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }

}).listen(3000);