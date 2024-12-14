console.log(false);

console.log(!false);

console.log(true);

console.log(!true);

console.log(!(1 === 1));

console.log(!null);

console.log(!undefined);

let firstName = prompt('Please enter your first name');

if (!firstName) {
    firstName = prompt('Please try again');
}

const age = 45;

if (!((age >= 0 && age < 5) || age >= 65)) {
    console.log('You have to pay');
}