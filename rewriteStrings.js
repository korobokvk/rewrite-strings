//This script takes a string of input file and changing it to overwrite the output file
let fs = require('fs');
let readline = require('readline');

let filename = process.argv[2];
readline.createInterface({
    input: fs.createReadStream('input.txt'),
    terminal: false
//'line' is you basic string
}).on('line', function(line) {
//change your string here, like an example. The example shows a SQL request to transfer links to the home page
   let exp = (`('${line}', 'http://odessamedia.net'),\n`);
   fs.appendFile("output.txt", exp)  
});

