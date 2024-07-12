// There is a queue for the self-checkout tills at the supermarket. Your task is
// write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer
// represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

/*

input:
  - customers: array of positive ints represnting the queue
  - n: number of checkout tills
output:
  - integer: total time until all customers are done

Rules:
  - You should assume that all the test input will be valid, as specified above.
  - The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
  - The line of customers goes from index 0 to end of array (shift())
  - Assume both args will be provided
  - Assume array will never be sparse

Data Structures:

tills = [ 2, 3 ] => [1, 2] => [10, 1] => [9] => [8] => [7] => [6] => [5] => [4] => [3] => [2] => [1]

Algorithm :

*/

function queueTime(customers, n) {
  // Initialize an array to track the total time for each till
  const tills = Array(n).fill(0);

  // Iterate over each customer
  for (let time of customers) {
    // Find the till with the minimum total time and add the customer's time to it
    const minTillIndex = tills.indexOf(Math.min(...tills));
    tills[minTillIndex] += time;
  }

  // The total time required will be the maximum time in the tills array
  return Math.max(...tills);
}
  
// Test cases
console.log(queueTime([5, 3, 4], 1)); // should return 12
console.log(queueTime([10, 2, 3, 3], 2)); // should return 10
console.log(queueTime([2, 3, 10], 2)); // should return 12