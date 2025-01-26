const p1BtnElem = document.querySelector('#p1Btn');
const p2BtnElem = document.querySelector('#p2Btn');

const p1DisplayElem = document.querySelector('#p1Display');
const p2DisplayElem = document.querySelector('#p2Display');

const resetBtnElem = document.querySelector('#resetBtn');
const scoreSelectElem = document.querySelector('#playTo');

let isGameOver = false;
let winningScoreInt = 3;

p1ArgsObj = {
    scoreInt: 0,
    playerDispElem: p1DisplayElem,
    otherPlayerDispElem: p2DisplayElem
};

p2ArgsObj = {
    scoreInt: 0,
    playerDispElem: p2DisplayElem,
    otherPlayerDispElem: p1DisplayElem
};

function incrementScore(argsObj) {
    if (isGameOver) return;

    argsObj['scoreInt'] += 1;

    if (argsObj['scoreInt'] >= winningScoreInt) {
        isGameOver = true;

        argsObj['playerDispElem'].classList.add('winner');
        argsObj['otherPlayerDispElem'].classList.add('loser');
    }

    argsObj['playerDispElem'].innerText = argsObj['scoreInt'];
}

p1BtnElem.addEventListener('click', function() {
    incrementScore(p1ArgsObj);
});

p2BtnElem.addEventListener('click', function() {
    incrementScore(p2ArgsObj);
});

function reset() {
    isGameOver = false;
    p1ArgsObj['scoreInt'] = 0;
    p1ArgsObj['playerDispElem'].innerText = 0;
    p1ArgsObj['playerDispElem'].classList.remove('winner');
    p1ArgsObj['playerDispElem'].classList.remove('loser');

    p2ArgsObj['scoreInt'] = 0;
    p2ArgsObj['playerDispElem'].innerText = 0;
    p2ArgsObj['playerDispElem'].classList.remove('winner');
    p2ArgsObj['playerDispElem'].classList.remove('loser');
}

resetBtnElem.addEventListener('click', function() {
    reset();
});

scoreSelectElem.addEventListener('change', function() {
    const newWinningScoreInt = parseInt(this.value, 10);
    if (!newWinningScoreInt) return;

    winningScoreInt = newWinningScoreInt;

    reset();
});