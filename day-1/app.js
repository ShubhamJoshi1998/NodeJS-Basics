// What Node.js is
// Why Node.js is used
// Node.js vs Browser JavaScript
// How to run a .js file with Node
// console.log()
// process
// process.argv
// Basic modules using require()
// How Node executes JavaScript


console.log("Hello Node.js");
console.log("STarting Node.js Learning");
console.log(process.version);
console.log(process.platform);


console.log("Application: My Node Learning App");
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

console.log(process.argv);

//// Get values from command-line arguments

const name  = process.argv[2];
const age = process.argv[3];
const role = process.argv[4];

// Display your Information - 
console.log("------------------------------------");
console.log("User Information");
console.log("------------------------------------");
console.log("Name :", name);
console.log("age :", age);
console.log("Role :", role);
console.log("------------------------------------");



