## Problem 1

A distinct string is a string that is present only once in an array.

Given an array of strings, `arr`, and an integer, `k`, return the kth distinct string 
present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.
```js
distinctString(["d","b","c","b","c","a"], 2); // "a"
```

**--- Potential Questions ---**

- Will we always receive precisely two arguments? 
 - If not, what should I do if an argument is omitted? What should I do if there are more than two arguments?
- Will the first argument always be an array? If not, what should I do?
- Will the second argument always be an integer? If not, what should I do if it isn't?
- Will the second argument ever be 0? If so, what should I do?
- Will the second argument ever be negative? If so, what should I do?
- Can the array be sparse? If so, how should I handle the missing elements?
- Can the array contain any number of elements?
- Can the array be empty? If so, what should I return in that case?
- Will strings always be one character long, or can they be any length?

## Problem 2

Given an array of integers, `nums`, return the third largest number in the array.

If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

```js
thirdMax([3, 2, 1]); // 1
```

**--- Potential Questions ---**

- Will we always receive precisely one argument? If not, what should I do if the array is omitted?
- What should I do if there is more than one argument?
- Will the argument always be an array? If not, what should I do?
- Can the array be empty? If so, what should I return?
- Can the array have fewer than three elements? If so, what should I return?
- Can the array be sparse? If so, how should I handle the missing elements?
- Can the array contain any number of elements?
- Will the array ever contain negative numbers or 0? If so, how should I handle those?
- Will the array ever contain non-integers? If so, how should I handle those?
- Will the array ever contain NaN? If so, how should I handle that?
- Will the array ever contain Infinity? If so, how should I handle that?
- Will the array ever contain -Infinity? If so, how should I handle that?
- Can the numbers in the array appear in any order? 
  - For instance, might I receive a [1, 3, 2] array? Does this affect the result in any way?
- Can the array have repeated numbers, e.g., [3, 3, 1]? If so, how should I handle those?
- Should I handle the two 3s as different numbers and return 1, or should I return the largest number, 3?

## Problem 3

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

```js
primeNumberPrinter("a4bc2k13d"); // [2, 13]
```

**--- Potential Questions ---**

- Will we always receive precisely one argument? If not, what should I do if the string is omitted? What should I do if there is more than one argument?
- Will the argument always be a string? If not, what should I do?
- Should I return an empty array if the string doesn't contain any prime numbers or any digits at all?
- Can the string be empty? If so, should I return an empty array?
- Can the string contain any number of characters?
- Suppose the string has adjacent digits, as in the example above? Would 13 only be number 13, or can I also consider it as two separate numbers, 1 and 3?
- If the string has three consecutive numbers, like 123. Should I consider 12 and 23 as separate numbers?
- In what order should the numbers be listed in the output array? Is it the order that the numbers appear in the string? 
  - If so, how should I treat numbers that are part of a larger number like 23 in the above number 123? Should 23 be printed before 123 or not?
- Can the string contain negative numbers, such as "a-4bc2k-13d"? What should I do in this case?

## Problem 4

​ Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed.

Treat numbers and number strings (e.g., `1` and `'1'`) as duplicates, and keep the one that comes first in the result.

```js
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
```

- Will we always receive precisely one argument? If not, what should I do if the array is omitted? What should I do if there is more than one argument?
- Will the argument always be an array? If not, what should I do?
- Will all the elements of the array argument be arrays themselves? If not, what should I do?
- Can the sub-arrays contain NaN values? If so, do I have to remove duplicate NaNs?
- Can the sub-arrays contain other primitive values besides digits and characters? If so, how should I handle those?
- Can the sub-arrays contain object or array values? If so, how should I handle those?
- If objects are allowed, would they be considered identical if key-value pairs are the same, for example: {a: 1} and {a: 1}?
- Can the array be sparse? If so, how should I handle the missing elements?
- Can the array contain any number of subarrays?
- Can the sub-arrays be empty? What should I do in this case?