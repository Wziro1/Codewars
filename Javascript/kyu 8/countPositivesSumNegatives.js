/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
    let arr = [];
    if (input == null) return [];
    if (input.length < 1) return [];

    arr.push(input.filter(i => i > 0).length)
    arr.push(input.filter(i => i < 0).reduce((prev, curr) => prev + curr, 0))

    return arr;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));