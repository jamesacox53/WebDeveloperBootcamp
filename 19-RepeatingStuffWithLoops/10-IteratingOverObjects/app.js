const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
};

for (let person in testScores) {
    const scoreStr = person + ' scored ' + testScores[person];
    
    console.log(scoreStr);
}

console.log(Object.keys(testScores));

console.log(Object.values(testScores));

console.log(Object.entries(testScores));

let totalNum = 0;
let scoresArr = Object.values(testScores);

for (let scoreNum of scoresArr) {
    totalNum += scoreNum;
}

const avgNum = totalNum / scoresArr.length;
console.log(avgNum);