let maximum = parseInt(prompt('Enter the maximum number!'));

while(!maximum || maximum < 0) {
    maximum = parseInt(prompt('Please enter a valid maximum number!'));
}

const targetNum =  Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Please enter your guess!');
let attempts = 1;

while(parseInt(guess) != targetNum) {
    if (guess == 'q') break;

    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = prompt('Too high! Please enter a new guess!');
        attempts++;
    
    } else if (guess < targetNum) {
        guess = prompt('Too low! Please enter a new guess!');
        attempts++;
    
    } else {
        guess = prompt('Invalid guess! Please enter a new guess!');
    }
}

if (guess == 'q') {
    console.log('You Quit!');

} else {
    console.log('You got it! It took you ' + attempts + ' guesses!');
}