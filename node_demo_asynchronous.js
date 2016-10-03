// An asynchronous example using a callback function

fs = require('fs');

fs.readdir('/Users/clbo/Documents/test/', function(err, data) {
    console.log('data:', data);
});

console.log("this comes after");
