/* Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future. */

// we have dad current old and his son current old
// loop in sonYearsOld * 2 until dad reach the goal // optional
// check if dadYearsOld is bigger or smaller than sonYearsOld * 2
// sonYearsOld * 2 - dadYearsOld

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // if (dadYearsOld < sonYearsOld * 2) return (sonYearsOld * 2) - dadYearsOld
    // return dadYearsOld - (sonYearsOld * 2)
    return dadYearsOld < sonYearsOld * 2 ? (sonYearsOld * 2) - dadYearsOld : dadYearsOld - (sonYearsOld * 2)
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));