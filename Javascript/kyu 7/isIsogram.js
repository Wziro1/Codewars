/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */

// we have a string
// we need to check if there any repeating characters(letters)
// we need to return boolean

// create new Set for the string but all chars to lower case
// loop for each set and put it in a newString variable
// check if the string === newString and return

function isIsogram(str){
    let set = new Set(str.toLowerCase());
    let newString = '';
    for(let value of set) {
        newString += value
    }
    return newString.toLowerCase() === str.toLowerCase();
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));

// best practice
function isIsogramBest(str) {
    return new Set(str.toLowerCase()).size == str.length;
}