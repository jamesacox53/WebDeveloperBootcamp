String.prototype.yell = function() {
    return `${this.toUpperCase()}!!!!!!`;
};

console.log("hello".yell());

Array.prototype.pop = function () {
    return "Sorry, I want to keep that element.";
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.pop());
console.log(arr);

console.log(arr.__proto__);