function rollDie(numSidesInt = 6) {
    return Math.floor(Math.random() * numSidesInt) + 1;
}

console.log(rollDie());
console.log(rollDie());
console.log(rollDie());
console.log(rollDie(20));
console.log(rollDie(20));
console.log(rollDie(20));

function greet(personStr, msgStr = "Hey there") {
    console.log(msgStr + ', ' + personStr);
}

greet("John", "Howdy");

greet("John");