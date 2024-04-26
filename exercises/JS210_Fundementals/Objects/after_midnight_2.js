const MS_PER_MIN = 60000;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440

function beforeMidnight(time) {
  return (MINUTES_PER_DAY - (afterMidnight(time))) % MINUTES_PER_DAY; 
}

function afterMidnight(time) {
  return Date.parse('01-01-1970 ' + time + ' UTC') / MS_PER_MIN;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686