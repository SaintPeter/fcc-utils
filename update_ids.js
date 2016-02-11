var fs = require('fs-extra');

var idMap = {
  "bg9997c9c79feddfaeb9bdef": "56bbb991ad1ed5201cd392ca",
  "bg9995c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cb",
  "bg9994c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cc",
  "bg9996c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cd",
  "bg9997c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392ce",
  "bg9997c9c89feddfaeb9bdef": "56bbb991ad1ed5201cd392cf",
  "bg9998c9c99feddfaeb9bdef": "56bbb991ad1ed5201cd392d0",
  "bg9999c9c99feddfaeb9bdef": "56bbb991ad1ed5201cd392d1",
  "bg9999c9c99feedfaeb9bdef": "56bbb991ad1ed5201cd392d2",
  "bg9999c9c99fdddfaeb9bdef": "56bbb991ad1ed5201cd392d3",
  "bb000000000000000000001": "56bbb991ad1ed5201cd392d4",
  "bc000000000000000000001": "56bbb991ad1ed5201cd392d5",
  "bb000000000000000000002": "56bbb991ad1ed5201cd392d6",
  "bb000000000000000000003": "56bbb991ad1ed5201cd392d7",
  "bb000000000000000000004": "56bbb991ad1ed5201cd392d8",
  "bb000000000000000000005": "56bbb991ad1ed5201cd392d9",
  "bb000000000000000000006": "56bbb991ad1ed5201cd392da"
};

var path = '../FreeCodeCamp/seed/challenges/';

var superblocks = fs.readdirSync(path);

superblocks.forEach(block => {
  var challengeFiles = fs.readdirSync(path + block);

  challengeFiles.forEach(file => {
    var changed = false;
    var filename = path + block + '/' + file;

    var fileData = fs.readJsonSync(filename);

    fileData.challenges = fileData.challenges.map(challenge => {
      if(idMap.hasOwnProperty(challenge.id)) {
        console.log('Updating:', challenge.title);
        console.log('Old:', challenge.id, 'New:', idMap[challenge.id]);
        challenge.id = idMap[challenge.id];
        changed = true;
      }
      return challenge;
    });

    if(changed) {
      console.log("Write: ", filename);
      fs.writeJsonSync(filename, fileData);
    }
  });
});