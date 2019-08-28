var fs = require('fs');
const Compute = require('./lib/compute');

console.log(process.argv.slice(2));

let input = './data/input.json';

if (!process.argv.slice(2).length) {
  console.log('path to input file is required');
}

console.log(input);

fs.readFile(input, 'utf8', function(err, data) {
  if (err) throw err;

  let compute = new Compute(data);
  compute.displayCommission();
});
