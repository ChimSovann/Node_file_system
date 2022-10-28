//write file 


const fs = require('fs');

const content = 'Hello world!';

fs.writeFile('../nodejs file system/write.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});