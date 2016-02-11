var moment = require('moment');

var testDates = [
  '1/1/2016 10:00',
  '1/1/2016 12:00',
  '1/2/2016 10:00',
  '1/3/2016 10:00',
  '1/4/2016 10:00',
  '1/7/2016 10:00',
  '1/8/2016 10:00',
  '1/9/2016 10:00',
  '1/10/2016 10:00',
  '1/11/2016 10:00',
  '1/12/2016 10:00',
  '1/13/2016 10:00'
];

console.log(JSON.stringify(testDates.map(date => {
  return {
    timestamp: moment(date).valueOf(),
    isFake: true
  };
}), '\n', 2));