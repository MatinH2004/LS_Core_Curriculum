// Write a function `rooms` that determines the minimum number of
// rooms required to handle a series of interviews given their
// time intervals.

// Each interval is represented as an array [start, end],
// where `start` is the start time and `end` is the end
// time of the interview.

// The function should return the number of conference rooms
// required to ensure no two interviews overlap in the same room.

// Example I:
// Input: intervals = [[20, 25], [10, 15], [0, 25]]
// Output: 2
// Explanation: The first interview is scheduled from
//              time 0 to 25. The second interview is
//              from time 10 to 15 and overlaps with
//              the first interview, requiring a second
//              room. The third interview from 20 to 25
//              also overlaps with the first. Thus, a
//              minimum of two rooms are required.

// Example II:
// Input: intervals = [[5, 9], [1, 3]]
// Output: 1
// Explanation: The first interview is scheduled from
//              time 5 to 9. The second interview is
//              from time 1 to 3. These two interviews
//              do not overlap, therefore only one
//              conference room is needed.

/*

### P

INPUT: nested arrays representing start-end times for interviews
OUTPUT: integer - num of rooms needed

RULES:
  - if the interview times overlap, put interview in new room
  - if end time is less than or equal to start time of next interview
    - they can stay in the same room
  - assume array will not be empty
  - assume nested arrays will contain start and end times [start, end]
    - only integers will be present in the array

### ALGO - BRUTE FORCE

- sort the intervals based on start times
- init tracking for meeting end times with the first meeting's end time
- for each subsequent interval
  - find the earliest end time from the current list of end times
  - determine the room allocation
    - if the meeting starts after or when this room frees up, update the room's end time
    - if not, add a new room with this meeting's end time
- return the count of end times in the list, representing the number of rooms needed

*/

function rooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const numMeetings = intervals.length;
  if (numMeetings === 0) return 0;

  let endTimes = [intervals[0][1]];

  for (let i = 1; i < numMeetings; i++) {
    let earliestEnd = Math.min(...endTimes);

    if (intervals[i][0] >= earliestEnd) {
      endTimes[endTimes.indexOf(earliestEnd)] = intervals[i][1];
    } else {
      endTimes.push(intervals[i][1]);
    }
  }

  return endTimes.length;
}

/*

### ALGO - OPTIMIZED

- create new array with start intervals sorted
- create new array with end intervals sorted
- create pointer for start array
- create pointer for end array

- we will move the start pointer every time as it means that the new meeting started
  - if the value at start is smaller than the value at end pointer,
    we must add a new room as the meeting hasnt finished
  - if the value at the start pointer is greater than or qual to the value
    at the end pointer, we can move both pointers because we can reuse the room
    that has just been freed.

*/

function rooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;

  const startIntervals = intervals.map(([start, _]) => start).sort((a, b) => a - b);
  const endIntervals = intervals.map(([_, end]) => end).sort((a, b) => a - b);

  let e = 0, roomsNeeded = 0;

  for (let s = 0; s < intervals.length; s++) {
    if (startIntervals[s] < endIntervals[e]) {
      roomsNeeded++;
    } else {
      s++;
      e++;
    }
  }

  return roomsNeeded;
}

// refactor
function rooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;

  const startIntervals = intervals.map(([start, _]) => start).sort((a, b) => a - b);
  const endIntervals = intervals.map(([_, end]) => end).sort((a, b) => a - b);

  let s = 0, e = 0, roomCount = 0;

  while (s < intervals.length) {
    if (startIntervals[s] >= endIntervals[e]) {
      e++;
    } else {
      roomCount++;
    }
    s++;
  }

  return roomCount;
}

// Test Cases:

console.log(rooms([[20, 25], [10, 15], [0, 25]]) === 2);
console.log(rooms([[5, 9], [1, 3]]) === 1);
console.log(rooms([[1, 2], [3, 4], [5, 6]]) === 1);
console.log(rooms([[1, 4], [2, 5], [3, 6]]) === 3);
console.log(rooms([[1, 3], [3, 6], [6, 8]]) === 1);
console.log(rooms([[1, 10]]) === 1);
console.log(rooms([[1, 3], [2, 4], [4, 6]]) === 2);
console.log(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) === 2);
console.log(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) === 3);
console.log(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) === 1);
console.log(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) === 2);
console.log(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) === 4);
// All test cases should log true