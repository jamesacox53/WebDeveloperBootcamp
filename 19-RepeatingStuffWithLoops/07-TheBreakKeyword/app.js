let input = prompt('Please say something');

while(true) {
    if (input == 'stop copying me') break;

    input = prompt(input);
}

console.log('You win!');

for (let i = 1; i <= 1000; i++) {
    console.log(i);

    if (i >= 100) break;
}