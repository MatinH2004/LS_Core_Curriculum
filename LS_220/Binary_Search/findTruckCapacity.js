// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

/*

Problem Time Complexity: O(NlogS), where S is the sum of all orders

INPUT:
  - an array of positive integers representing order volumes
  - an integer representing the maximum trips the truck can make
OUTPUT:
  - return the minimum truck capacity

RULES:
  - input array will always contain positive integers
  - maxTrips will always be a positive integer
  - return the minimum truck capacity

  Example:
  Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
  Output: 14
  Explanation: A truck with 14 cubic meters capacity can
              deliver all orders in 3 trips:
  Trip 1: 6 + 3 = 9 cubic meters
  Trip 2: 8 + 2 = 10 cubic meters
  Trip 3: 5 + 4 + 5 = 14 cubic meters

ALGO:
  - BINARY SEARCH COMPONENT O(logS)
    - set result to 0
    - use left pointer as 1 (min capacity) and right pointer as sum of orderVolumes (max capacity)
    - while left is less than or equal to right
      - assign mid to (left + right) / 2
      - if isValidCapacity
        - assign result to mid
        - try lower capacity -> right = mid - 1
      - else
        - try higher capacity -> left = mid + 1
    - return result

  - LINEAR SEARCH COMPONENT O(N) -> helper function isValidCapacity(orderVolumes, maxTrips, capacity)
    - set idx and currentVolume to 0
    - while idx is less than orderVolumes
      - if adding current order to currentVolume doesn't exceed capacity
        - add current order to currentVolume
        - increment idx
      - else
        - reset currentVolume to 0
        - decrement number of trips
    - return true if we've processed all orders
      - idx === orderVolumes.length

*/

function isValidCapacity(orderVolumes, trips, capacity) {
  let currVolume = 0;
  let idx = 0;

  while (idx < orderVolumes.length && trips > 0) {
    if ((currVolume + orderVolumes[idx]) <= capacity) {
      currVolume += orderVolumes[idx];
      idx++;
    } else {
      currVolume = 0;
      trips--;
    }
  }

  return idx === orderVolumes.length;
}

function findTruckCapacity(orderVolumes, maxTrips) {
  const sum = arr => arr.reduce((acc, n) => acc + n, 0);

  let result = 0;
  let left = 1;
  let right = sum(orderVolumes);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isValidCapacity(orderVolumes, maxTrips, mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);