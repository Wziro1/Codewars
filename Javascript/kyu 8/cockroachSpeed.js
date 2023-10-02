/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */

// to convert km/h to cm/s:
// km/h --> km/60min --> km/3600s
// (km * 1000 * 100) / 3600
// floor the returned number

function cockroachSpeed(speed) {
    return Math.floor((speed * 1000 * 100) / 3600)
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));

/* Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */