/* Is the string uppercase?
Task:
Create a method to see whether the string is ALL CAPS. */

function isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
}

console.log(isUpperCase("STOP"));
console.log(isUpperCase("stop"));