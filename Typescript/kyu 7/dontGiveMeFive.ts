/* In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! */

/* The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata! */

// we have start and end number
// we need to make array from start to end values except fives like (5,15,25,50)
// return the length of the array

function dontGiveMeFive(start: number, end: number): number {
    let arr: number[] = [];
    for (let i: number = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            arr.push(i);
        }
    }
    return arr.length;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(1, 19));
