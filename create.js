//create file using appendFile

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello KIT', function(err) {
    if (err) throw err;
    console.log('Saved!');
});