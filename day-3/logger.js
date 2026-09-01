const fs = require("fs");

function log(message) {

    const timeStamp = new Date();

    const logMessage = `[${timeStamp}] ${message} \n`;

    fs.appendFile("logs.txt", logMessage, (error) => {
        if (error) {
            console.log("Error writing log");
            return;
        }
    });
}

module.exports = log;