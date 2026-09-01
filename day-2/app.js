//const userName = require("./user");
//const getUserName = require("./user");

// const getUser = require("./user")
// const { add, subtract } = require("./math");

// const user = getUser();

//console.log(userName);
//console.log(getUserName());

// console.log(user.name);
// console.log(user.role);
// console.log(add(10, 20));
// console.log(subtract(10, 20));


                                            // user.js

                                            // userName
                                            // ↓
                                            // module.exports
                                            // ↓
                                            // require("./user")
                                            // ↓
                                            // app.js


const{ getPlatform, getArchitecture } = require("./system");
const getUser = require("./user");

console.log("=========================");
console.log("System Information");
console.log("=========================");
console.log("Platform:", getPlatform());
console.log("Architecture:", getArchitecture());
console.log("=========================");
console.log("User Information");
console.log("=========================");
console.log("Name:", getUser().name);
console.log("Role:", getUser().role);
