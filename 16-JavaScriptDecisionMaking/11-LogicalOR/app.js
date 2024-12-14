console.log(true || true);

console.log(true || false);

console.log(false || true);

console.log(false || false);

console.log((1 === 1) || (2 < 7));

const age = 100;

if ((age >= 0 && age < 5) || age >= 65) {
    console.log('Free');

} else if (age >= 5 && age < 10) {
    console.log('$10');

} else if (age >= 10 && age < 65) {
    console.log('$20');

} else {
    console.log("Invalid age")
}