// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

// console.log("Start");
// setTimeout(() => {
//     console.log("Timer");
// }, 0);
// console.log("End");

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// setTimeout(() => {
//     console.log("C");
// }, 1000);

// console.log("D");

// console.log("Start");

// setTimeout(() => {
//     console.log("Timer 1");
// }, 3000);

// setTimeout(() => {
//     console.log("Timer 2");
// }, 1000);

// setTimeout(() => {
//     console.log("Timer 3");
// }, 0);

// console.log("End");

// Output : Start
// End
// Timer 3
// Timer 2
// Timer 1

const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf-8",(err,data) => {
    if(err){
        console.log("Error Reading File");
        return;
    }
    console.log("File COntent : " , data);
})

console.log("End");


 