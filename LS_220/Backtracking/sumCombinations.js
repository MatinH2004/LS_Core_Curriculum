// You are given an array of unique positive integers and a positive
// integer target. The goal is to find all unique combinations of 
// integers from the numbers that sum up to the target value.
// Each number from the numbers array can be used as many times as needed.
// The order of numbers in a combination doesn't matter.
// Two combinations are considered different if they use at least
// one number a different number of times.
// All valid combinations should be returned in any order.

// Example 1:
// Given numbers = [3, 5, 7] and target = 15, the valid
// combinations are:
// [[3, 3, 3, 3, 3], [3, 5, 7], [5, 5, 5]]

// Example 2:
// For numbers = [1, 3, 5, 7] and target = 8, we get:
// [[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 3], [1, 1, 1, 5], [1, 1, 3, 3], [1, 7], [3, 5]]

function sumCombinations(candidates, target) {
    function backtrack(candidates, candidate, result, position, currSum) {
        if (currSum === target) {
            result.push([...candidate]);
            return;
        }

        for (let idx = position; idx < candidates.length; idx++) {
            const elem = candidates[idx];
            if (currSum + elem > target) {
                continue;
            }

            candidate.push(elem);
            currSum += elem;
            backtrack(candidates, candidate, result, idx, currSum);
            candidate.pop();
            currSum -= elem;
        }
    }

    const result = [];
    const candidate = [];
    backtrack(candidates, candidate, result, 0, 0);
    return result;
}

function combToString(comb) {
    return comb.slice().sort((a, b) => a - b).join(',');
}

function testSumCombinations(numbers, target, expected) {
    const result = sumCombinations(numbers, target);
    if (result.length !== expected.length) return false;

    for (const combination of result) {
        if (combination.reduce((sum, num) => sum + num, 0) !== target) {
            return false;
        }
    }

    const resultSet = new Set(result.map(combToString));
    const expectedSet = new Set(expected.map(combToString));

    if (resultSet.size !== result.length) return false;
    if (resultSet.size !== expectedSet.size) return false;

    for (const comb of resultSet) {
        if (!expectedSet.has(comb)) return false;
    }

    return true;
}
// Test Cases
console.log(testSumCombinations([2, 3, 6, 7], 7, [[2, 2, 3], [7]]));
console.log(testSumCombinations([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]));
console.log(testSumCombinations([2], 1, []));
console.log(testSumCombinations([1, 2, 3], 4, [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]));
console.log(testSumCombinations([2, 3, 5], 10, [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]));

console.log(testSumCombinations([1, 2, 3], 5, [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [2, 3],
]));

console.log(testSumCombinations([1, 2, 4, 8], 16, [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 8],
    [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1,1, 2, 2, 2, 4],
    [1, 1, 1, 1, 1, 1, 2, 4, 4],
    [1, 1, 1, 1, 1, 1, 2, 8],
    [1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 2, 2, 2, 2, 4],
    [1, 1, 1, 1, 2, 2, 4, 4],
    [1, 1, 1, 1, 2, 2, 8],
    [1, 1, 1, 1, 4, 4, 4],
    [1, 1, 1, 1, 4, 8],
    [1, 1, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 2, 2, 2, 2, 2, 4],
    [1, 1, 2, 2, 2, 4, 4],
    [1, 1, 2, 2, 2, 8],
    [1, 1, 2, 4, 4, 4],
    [1, 1, 2, 4, 8],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 4],
    [2, 2, 2, 2, 4, 4],
    [2, 2, 2, 2, 8],
    [2, 2, 4, 4, 4],
    [2, 2, 4, 8],
    [4, 4, 4, 4],
    [4, 4, 8],
    [8, 8]
]));