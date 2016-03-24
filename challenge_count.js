var fs = require('fs-extra');

var path = '../FreeCodeCamp/seed/challenges/';

var fileCount = 0;
var counts = {};

var superblocks = fs.readdirSync(path);

superblocks.forEach(block => {
  var challengeFiles = fs.readdirSync(path + block);
  
  counts[block] = {};
  counts[block].total = 0;

  challengeFiles.forEach(file => {
    var changed = false;
    var count = 0;
    var filename = path + block + '/' + file;

    var fileData = fs.readJsonSync(filename);

    counts[block][file] = fileData.challenges.length;
    counts[block].total += fileData.challenges.length;
  });
});

console.log(counts);
