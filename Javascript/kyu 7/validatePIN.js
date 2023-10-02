/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false. */

// check if the pin is only numbers
// check if the length of the pin equals 4 or 6

function validatePIN (pin) {
    // if (!Number(pin) || parseInt(pin) != Number(pin)) return false
    // return pin.length === 4 || pin.length === 6
    const regex = /[0-9]/gi
    if (pin === null) return false
    return pin.split('').length === pin.match(regex).length && (pin.length === 6 || pin.length === 4)
}

console.log(validatePIN('123456')); // true
console.log(validatePIN('1234')); // true
console.log(validatePIN('12345')); // false
console.log(validatePIN('1234D5')); // false
console.log(validatePIN('123.')); // false
console.log(validatePIN('-132')); // false
console.log(validatePIN('-1325')); // false

console.log();