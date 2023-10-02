// we have a bin parameter and its a string
// Goal: convert the bin to decimal number

// split the bin to array
// reverse the array
// make a varibale that will be multiblied by 2 everytime we loop
// loop for each element in the reversed array and multiply it by the variable we created 
// convert bin to number
// take the sum of the multiplied elements

// my solution:
function binToDec(bin) {
    let arr = bin.split('').reverse();
    let sum = 0;
    let multiplier = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * multiplier;
        multiplier *= 2;
    }
    return sum;
}

// best practice
function binToDecBest(bin){
    return parseInt(bin,2);
}

console.log(binToDec("111"))
console.log(binToDecBest("111"))