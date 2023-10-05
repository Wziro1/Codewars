/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

// we have an array of integers
// we need to return a number of the integer in the element that appears an odd time

// create new object
// loop in the array and each number but it in the object and add one to it
// loop of the object and check the element that has an odd number and return it

function findOdd(array) {
    let object = new Object({});
    for (let i = 0; i < array.length; i++) {
        if (!object[array[i]]) object[array[i]] = 0
        object[array[i]]++
    }
    for (let value in object) {
        if (object[value] % 2 !== 0) {
            return Number(value)
        }
    }
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

// cleaver solution
const findOddCleaver = (xs) => xs.reduce((a, b) => a ^ b);