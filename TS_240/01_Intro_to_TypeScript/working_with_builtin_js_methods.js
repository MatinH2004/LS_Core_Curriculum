var numbersInStringFormat = ["10", "20", "30", "40"];
function convertToNumbers(arr) {
    return arr.map(Number);
}
console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
