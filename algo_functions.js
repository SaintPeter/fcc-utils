var fs = require('fs-extra');

var path = '../FreeCodeCamp/seed/challenges/';

var superblocks = fs.readdirSync(path);

superblocks.forEach(block => {
  var challengeFiles = fs.readdirSync(path + block);

  challengeFiles.forEach(file => {
    var changed = false;
    var filename = path + block + '/' + file;

    var fileData = fs.readJsonSync(filename);

    fileData.challenges.forEach(challenge => {
      challenge.challengeSeed.forEach(challengeLine => {
        if (typeof challengeLine === 'string') {
          var match = /function (\w+)\(/gi.exec(challengeLine);
          if (match) {
            console.log(file, "\t", challenge.type, '\t', challenge.title, '\t', match[1]);
          }
        }
      });
    });
  });
});