// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("promise Completed");
//     }, 3000);
// });

// console.log("Start");

// promise.then((result) => {
//     console.log(result);
// })

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }

// getData().then(result => {
//     console.log(result);
// });

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Data Not Received");
//         }, 2000);
//     });
// }

// getData().catch(error => {
//     console.log(error);
// });

// async function fetchData() {
    
//     return "Hello";
// }

// console.log(fetchData());

// async function main() {
//     const result = await fetchData();
//     console.log(result);
// }

// console.log(main());

// function getData() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// };

// async function main() {
//     console.log("Start");
//     try{
//         const result = await getData();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }

//     console.log("End");
// }

// main();

const fs = require('fs');

async function readFile() {
    console.log("Start");
    try{

    const data = await fs.promises.readFile('data.txt', 'utf-8');
    console.log(data);

    console.log("\nEnd");
    }catch(error){
        console.log("Error : Unable to read file");
    }
}


readFile();







