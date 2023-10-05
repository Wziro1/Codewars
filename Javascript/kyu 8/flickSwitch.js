/* ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True] */
/* "flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself. */

// we have an array of strings
// we need to return an array of boolean

// loop for each element in the array
// if the element was equal to 'flick' make all the remaining elements to false

function flickSwitch(arr){
  let arrBool = [];
  let currentFlick = true;
  for (let i = 0; i < arr.length; i++) {
    currentFlick = arr[i] === 'flick' ? !currentFlick : currentFlick;
    arrBool.push(currentFlick);
  }
  return arrBool;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
console.log(flickSwitch(([["john", "smith", "susan"], "flick"])));
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));
console.log(flickSwitch([]));