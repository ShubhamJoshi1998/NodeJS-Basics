// const fs = require('fs');

// fs.readFile("data.txt", "utf-8", (err, data) => {
//     if (err){
//         console.log("Error Reading File");
//         return;
//     }
//     console.log("file Content: ", data);
// })

// fs.writeFile("output.txt", "Hello World ! I am Updated", (err) => {
//     if (err){
//         console.log("Error Writing File");
//         return;
//     }
//     console.log("File Written Successfully");
// })

// fs.appendFile("output.txt", "\nHello World ! I am Appended twice", (err) => {
//     if (err){
//         console.log("Error Appending File");
//         return;
//     }
//     console.log("File Appended Successfully");
// })

const log = require('./logger');

log("Application Started");
log("User logged in");
log("User logged out");