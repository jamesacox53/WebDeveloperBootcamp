const scoresArr = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScoreInt = scoresArr[0];
const secondHighScore = scoresArr[1];

const [goldInt, silverInt, bronzeInt, ...restArr] = scoresArr;

console.log(goldInt);
console.log(silverInt);
console.log(bronzeInt);
console.log(restArr);