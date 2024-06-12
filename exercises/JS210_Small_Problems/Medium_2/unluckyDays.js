/*
---------- PROBLEM ----------
INPUT:
  - integer (year)
OUTPUT:
  - integer (number of fridays on the 13th day of the month)

EXAMPLES:

----------- RULES -----------
  - Assume that the year is greater than 1752
    - Assume the same calendar for future years
  - One arg will be provided in integer form representing the year

------- DATA STRUCTURE ------
  - Date, String

--------- SCRATCH PAD -------

---------- ALGORITHM --------
  - Iterate over all the months of the given year.
  - For each month, get the day that falls on the 13th.
  - Count the 13ths that fall on a Friday.
  - Return the count.
*/

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    const dayOfWeek = date.getDay();
    // friday would be 5
    if (dayOfWeek === 5) count += 1;
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2