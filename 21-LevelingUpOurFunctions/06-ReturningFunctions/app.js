function makeMysteryFunc() {
    const rand =  Math.random();

    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function.");
        }
    
    } else {
        return function() {
            console.log("I am a bad function");
        }
    }
}

const myFunc = makeMysteryFunc();

myFunc();

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 200);

console.log(isChild(5));
console.log(isChild(50));
console.log(isChild(75));

console.log(isAdult(5));
console.log(isAdult(50));
console.log(isAdult(75));

console.log(isSenior(5));
console.log(isSenior(50));
console.log(isSenior(75));