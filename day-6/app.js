// const http = require('http');

// http.createServer((req,res) => {
//    // res.end("Hello This is Day-6");
//     console.log("Good Morning, Day-6");

//     if(req.method == "POST" && req.url == "/users"){
//         res.writeHead(200, {
//             "Content-Type" : "text/plain"
//         });
//         res.end("POST /users received");
//     }else{
//         res.writeHead(404, {
//             "Content-Type" : "text/plain"
//         });
//         res.end("404 - Page not found")
//     }
// }).listen(3000)

const http = require("http");

const users = [
    {
        id: 1,
        name: "Shubham",
        age: 25
    },
    {
        id: 2,
        name: "Rahul",
        age: 24
    }
];

const server = http.createServer((req, res) => {

    // Task 1: Handle POST /users
    if (req.method === "POST" && req.url === "/users") {

        // Task 2: Read request body
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            // Task 3 & 6: Parse JSON and handle invalid JSON
            let userData;

            try {
                userData = JSON.parse(body);
            } catch (error) {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "Invalid JSON"
                }));

                return;
            }

            // Bonus: Validate name and age
            if (!userData.name || userData.age === undefined) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "name and age are required"
                }));

                return;
            }

            // Task 4: Create new user
            const newUser = {
                id: users.length + 1,
                name: userData.name,
                age: userData.age
            };

            // Add user to array
            users.push(newUser);

            // Task 5: Return 201 Created
            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(newUser));
        });

    } else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            error: "Page Not Found"
        }));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

