//append 


const fs = require('fs');


console.log("\nFile Contents of file before append:",
    fs.readFileSync("append.txt", "utf8"));

fs.appendFile("append.txt", "World", (err) => {
    if (err) {
        console.log(err);
    } else {
        // Get the file contents after the append operation
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("append.txt", "utf8"));
    }
});