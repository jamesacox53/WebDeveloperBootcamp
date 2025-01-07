const add = (x, y) => {
    return x + y;
}

console.log(add(5, 7));

const square = x => {
    return x * x;
}

console.log(square(5));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());
console.log(rollDie());
console.log(rollDie());