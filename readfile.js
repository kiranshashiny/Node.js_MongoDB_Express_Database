var fs = require('fs');

fs.open('GTX.csv', 'r', function (err) {
  if (err) throw err;
  console.log('Opened file succeeded');
});


fs.readFile('GTX.csv', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
