const p1BtnElem = document.querySelector('#p1Button');
const p2BtnElem = document.querySelector('#p2Button');

const p1DisplayElem = document.querySelector('#p1Display');
const p2DisplayElem = document.querySelector('#p2Display');

let isGameOver = false;
let winningScoreInt = 5;

p1ArgsObj = {
    scoreInt: 0,
    displayElem: p1DisplayElem
};

p2ArgsObj = {
    scoreInt: 0,
    displayElem: p2DisplayElem
};

function incrementScore(argsObj) {
    if (isGameOver) return;

    argsObj['scoreInt'] += 1;

    if (argsObj['scoreInt'] >= winningScoreInt) {
        isGameOver = true;
    }

    argsObj['displayElem'].innerText = argsObj['scoreInt'];
}

p1BtnElem.addEventListener('click', function() {
    incrementScore(p1ArgsObj);
});

p2BtnElem.addEventListener('click', function() {
    incrementScore(p2ArgsObj);
});