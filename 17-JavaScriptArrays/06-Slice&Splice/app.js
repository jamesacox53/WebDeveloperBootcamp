let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);

let colors2 = colors.slice();
console.log(colors2);

let colors3 = colors.slice(3);
console.log(colors3);

let colors4 = colors.slice(0, 3);
console.log(colors4);

let colors5 = colors.slice(-3);
console.log(colors5);

let colors6 = colors.splice(5, 1);
console.log(colors6);
console.log(colors);

let colors7 = colors.splice(1, 0, 'red-orange');
console.log(colors7);
console.log(colors);

let colors8 = colors.splice(4, 0, 'yellow-green', 'forestgreen');
console.log(colors8);
console.log(colors);

let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores);
scores.sort();
console.log(scores);