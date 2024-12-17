let movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'eva'];
console.log(movieLine);

let person = movieLine.shift();
console.log(person);
console.log(movieLine);

let person2 = movieLine.shift();
console.log(person2);
console.log(movieLine);

movieLine.unshift('VIP');
console.log(movieLine);