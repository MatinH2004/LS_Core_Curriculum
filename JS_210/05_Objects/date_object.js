function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's day is ${day}, ${month} ${dateSuffix(date.getDate())}`);
}

function formattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// Variable with current date and time;
let today = new Date;

formattedDate(today);

console.log(today.getFullYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));