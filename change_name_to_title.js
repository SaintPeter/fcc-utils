var fs = require('fs-extra');

var path = '../FreeCodeCamp/seed/challenges/';

var fileCount = 0;

var superblocks = fs.readdirSync(path);

superblocks.forEach(block => {
  var challengeFiles = fs.readdirSync(path + block);

  challengeFiles.forEach(file => {
    var changed = false;
    var count = 0;
    var filename = path + block + '/' + file;

    var fileData = fs.readJsonSync(filename);

    fileData.challenges = fileData.challenges.map(challenge => {
      Object.keys(challenge).forEach(key => {
        var matches = key.match(/name(\w{2})/);
        if(matches) {
          var oldName = matches[0];
          var newTitle = "title" + matches[1];

          // Change `nameXX` to `titleXX`
          challenge[newTitle] = challenge[oldName];
          delete challenge[oldName];

          changed = true;
          count++;
        }
      });

      return challenge;
    });

    if(changed) {
      console.log("Write: ", filename, '(' + count + ')');
      fs.writeJsonSync(filename, fileData);
      fileCount++;
    }
  });
});

console.log('Total Files: ', fileCount);