console.log('hi' === 'hi');

console.log(['hi'] === ['hi']);

console.log([1] === [1]);

console.log([] == []);

let nums = [1, 2, 3];
let numsCopy = nums;

console.log(nums === numsCopy);

nums.push(4);
console.log(nums);
console.log(numsCopy);