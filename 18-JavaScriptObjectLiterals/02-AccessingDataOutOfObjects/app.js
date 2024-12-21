const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
};

console.log(person);
console.log(person['lastName']);

const kitchenSink = {
    favNum: 1231231,
    isFunny: true,
    colors: ['red', 'orange']
};

console.log(kitchenSink);
console.log(kitchenSink.colors);

const years = {
    1999: 'GOOD',
    2020: 'BAD'
};

console.log(years);

let birthYear = 1999;
console.log(years[birthYear]);