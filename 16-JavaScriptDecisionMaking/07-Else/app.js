let num = Math.random();

if (num < 0.5) {
    console.log("Your number is less than 0.5");

} else if (num == '0.5') {
    console.log("Your number is equal to 0.5");

} else {
    console.log("Your number is greater than 0.5");
}

console.log(num);

const dayOfWeekStr = prompt('Please enter a day').toLowerCase();

if (dayOfWeekStr === 'monday') {
    console.log('I hate Mondays!');

} else if (dayOfWeekStr === 'saturday') {
    console.log('I love Saturdays!');

} else if (dayOfWeekStr === 'friday') {
    console.log('Fridays are decent, especially after work.');

} else {
    console.log('Meh');
}

const ageInt = 21;

if (ageInt < 5) {
    console.log('You are a baby. You get in for Free.');

} else if (ageInt < 10) {
    console.log('You are a child. You pay $10.');

} else if (ageInt < 65) {
    console.log('You are an adult. You pay $20.');

} else {
    console.log('You are a senior. You pay $10.')
}