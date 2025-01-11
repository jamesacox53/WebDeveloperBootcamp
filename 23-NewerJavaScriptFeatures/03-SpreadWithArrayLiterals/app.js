const catsArr = ['Blue', 'Scout', 'Rocket'];
const dogsArr = ['Rusty', 'Wyatt'];

const petsArr = [...catsArr, ...dogsArr];

console.log(petsArr);

const catsCopyArr = [...catsArr];

console.log(catsCopyArr);

console.log([..."hello"]);