let count = 0;

while(count < 10) {
    console.log(count);

    count++;
}

let gameOver = false;

while(!gameOver) {
    // player 1 move

    // player 2 move
    console.log('Game in progess');
    gameOver = true;
}

console.log('Game Over');

const secret = 'BabyHippo';

let guess = prompt('Please enter the secret code...');

while(guess != secret) {
    guess = prompt('Please enter the secret code...');
}

console.log('Congrats you got the secret!!!');