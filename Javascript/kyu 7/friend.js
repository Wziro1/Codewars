/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

// we have an array of string
// we need to return an array of string

// loop in the array and check if any element length equals to 4 and puth it in new array
// return the new array

function friend(friends){
    // let arr = [];
    // for (let i = 0; i < friends.length; i++) {
    //     if (friends[i].length === 4) {
    //         arr.push(friends[i]);
    //     }
    // }
    // return arr;
    return friends.filter(f => f.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
console.log(friend(["Love", "Your", "Face", "1"]));