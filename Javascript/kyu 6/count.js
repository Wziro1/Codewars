/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}. */

// we have a string of characters
// we need to return an object with the number of each character in the string

// split the string to array
// make an empty object
// loop for eact character in the array
// take the element and put it in the empty object and make its value++

function count(string) {
    let arr = string.split('');
    let objectCount = new Object({});
    for (let i = 0; i < arr.length; i++) {
        if (!objectCount[arr[i]]) {
            objectCount[arr[i]] = 0;
        }
        objectCount[arr[i]]++;
    }
    return objectCount;
}

console.log(count('aba'));