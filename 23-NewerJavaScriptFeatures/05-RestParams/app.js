function sum() {
    let sum = 0;

    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

const exampleSumNum1 = sum(1, 2, 3, 4, 5, 6);

console.log(exampleSumNum1);

function sum2(...numsArr) {
    return numsArr.reduce((a, e) => a + e);
}

const exampleSumNum2 = sum2(11, 12, 13, 14, 15);

console.log(exampleSumNum2);

function raceResults(goldStr, silverStr, ...restArr) {
    const msgStr = 'Gold: ' + goldStr + '\n' +
    'Silver: ' + silverStr + '\n' +
    'Rest: ' + restArr.join(', ');

    return msgStr;
}

const raceResStr = raceResults('John', 'Arthur', 'Dutch', 'Bill');

console.log(raceResStr);