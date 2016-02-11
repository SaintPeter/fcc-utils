var mongo = require('mongodb');

var invalid = [
'bg9997c9c79feddfaeb9bdef',
    'bg9995c9c69feddfaeb9bdef',
    'bg9994c9c69feddfaeb9bdef',
    'bg9996c9c69feddfaeb9bdef',
    'bg9997c9c69feddfaeb9bdef',
    'bg9997c9c89feddfaeb9bdef',
    'bg9998c9c99feddfaeb9bdef',
    'bg9999c9c99feddfaeb9bdef',
    'bg9999c9c99feedfaeb9bdef',
    'bg9999c9c99fdddfaeb9bdef',
    'bb000000000000000000001',
    'bc000000000000000000001',
    'bb000000000000000000002',
    'bb000000000000000000003',
    'bb000000000000000000004',
    'bb000000000000000000005',
    'bb000000000000000000006'
];

var newMap = invalid.reduce((list, bad) => {
  list[bad] = mongo.ObjectID();
  return list;
},{});

console.log(JSON.stringify(newMap,"\n",2));

