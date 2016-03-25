var fs = require('fs-extra');

var path = '../FreeCodeCamp/seed/challenges/';

var fileCount = 0;
var counts = {};

var superblocks = fs.readdirSync(path);

superblocks.forEach(block => {
  var challengeFiles = fs.readdirSync(path + block);
  
  counts[block] = {};
  counts[block].total = 0;
  counts[block].required_total = 0;

  challengeFiles.forEach(file => {
    var changed = false;
    var count = 0;
    var filename = path + block + '/' + file;

    var fileData = fs.readJsonSync(filename);

    counts[block][file] = {};

    counts[block][file].total = fileData.challenges.length;
    counts[block][file].required = fileData.challenges.filter(item => item.isRequired).length;
    counts[block][file].optional = fileData.challenges.filter(item => !item.isRequired).length;
    counts[block].total += fileData.challenges.length;
    counts[block].required_total += counts[block][file].required;
  });
});

console.log(counts);
