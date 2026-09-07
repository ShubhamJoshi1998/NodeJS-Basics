const express = require("express");

const app = express();

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

app.get("/", (req, res) => {
    res.send("Welcome to my Express server!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at example@example.com");
});

app.get("/user", (req, res) => {
    res.send({
        name: "Shubham",
        role: "Developer"
    });
});

app.get("/users", (req,res) => {
    res.json(users);
})

app.get("/products", (req,res) => {
    res.json(products);
});

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: "New User",
        age: 30
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});