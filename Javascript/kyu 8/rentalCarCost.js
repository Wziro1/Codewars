/* After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d). */

// the car costs $40 per day
// if days >= 3 < 7 ? total - $20
// if days >= 7 ? total - 50

function rentalCarCost(days) {
    let total = 0;
    let carPrice = 40;
    for (let i = 1; i <= days; i++) {
        total += carPrice
    }
    if (days >= 3 && days < 7) total -= 20
    if (days >= 7) total -= 50

    return total
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(9));
console.log(rentalCarCost(10));
console.log(rentalCarCost(14));