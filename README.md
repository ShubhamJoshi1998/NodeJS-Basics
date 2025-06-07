# NodeJS-Basics
# 🌐 Introduction to Node.js

## 🅰️ What is Node.js?

1. **Node.js** is a cross-platform runtime environment and library for running JavaScript applications outside the browser.
2. It is **open-source** and **free to use**.
3. Node.js is mostly used to build **real-time server-side applications**.

---

## 🅱️ Features of Node.js

- ⚡ **Extremely Fast**: Built on the V8 JavaScript engine.
- 🧵 **Single-threaded**: Uses an event-driven model.
- 🔓 **Open Source**: Maintained by a large community.
- 🖥️ **Cross-platform**: Runs on Windows, Linux, and macOS.

---

## 🔤 Basic Node.js Example

Here is a basic example of how to use Node.js to perform some operations with numbers, strings, arrays, objects, functions, loops, and conditionals:

```js
console.log("Hello, World!");
console.log("Welcome to JavaScript programming!");
console.log("Let's do some basic arithmetic operations.");

// Arithmetic Operations
let a = 2, b = 3;
console.log("The sum of a and b is: " + (a + b));

let d = 5, e = 10;
console.log("The product of d and e is: " + (d * e));

let g = 20, h = 4;
console.log("The division of g by h is: " + (g / h));

let j = 15, k = 3;
console.log("The difference between j and k is: " + (j - k));

// String Operations
console.log("Now, let's explore some string operations.");
let str1 = "Hello", str2 = "World";
let str3 = str1 + " " + str2;
console.log("Concatenated string: " + str3);
console.log("String length of str3: " + str3.length);
console.log("Uppercase str3: " + str3.toUpperCase());
console.log("Lowercase str3: " + str3.toLowerCase());

// Array Operations
console.log("Now, let's work with arrays.");
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array: " + fruits);
fruits.push("Date");
console.log("Array after adding Date: " + fruits);
fruits.pop();
console.log("Array after removing last element: " + fruits);
fruits.unshift("Mango");
console.log("Array after adding Mango at the beginning: " + fruits);
fruits.shift();
console.log("Array after removing first element: " + fruits);
fruits.forEach(fruit => {
    console.log("Fruit: " + fruit);
});

// Object Operations
console.log("Now, let's create a simple object.");
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};
console.log("Person object: ", person);
console.log("Accessing properties:");
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Occupation: " + person.occupation);
person.age += 1;
console.log("Updated age: " + person.age);

// Function
console.log("Now, let's create a simple function.");
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Loop
console.log("Let's create a simple loop.");
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration: " + i);
}

// Conditionals
console.log("Now, let's explore conditional statements.");
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

console.log("End of the practice script.");
console.log("Thank you for following along!");
```

🌐 **Web-Based Example (Simple Node.js Server)**

Node.js Web Application contains the following parts:

✅ Import Required Module
✅ Create Server
✅ Read Request and Return Response

1️⃣ **Import Required Module**
```
var http = require('http');
```
2️⃣ **Create Server**
```
http.createServer(function(request, response) {
    // Send HTTP header
    // HTTP Status: 200 OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end("Hello World");
}).listen(8081);
```
📌 Note
In the second step, we call http.createServer() to create a server instance.
Then we bind it to port 8081 using the listen() method.
The function takes request and response parameters and writes "Hello World" as output.

▶️ **How to Run the Code**
Save the file as app.js or server.js
Open terminal or command prompt

**Run the following command:**
```
node app.js
```
**Visit the URL in your browser:**
```
http://localhost:8081
```


