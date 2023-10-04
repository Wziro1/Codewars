/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

// we have a random number
// we need to return the number sorted desc

// split the number to an array and sort it desc
// join the array again

function descendingOrder(n) {
    return Number(n.toString().split('').sort().reverse().join(''))
}

console.log(descendingOrder(453284));