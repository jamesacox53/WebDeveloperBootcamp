const p1BtnElem = document.querySelector('#p1Btn');
const p2BtnElem = document.querySelector('#p2Btn');

const p1DisplayElem = document.querySelector('#p1Display');
const p2DisplayElem = document.querySelector('#p2Display');

const resetBtnElem = document.querySelector('#resetBtn');
const scoreSelectElem = document.querySelector('#playTo');

let isGameOver = false;
let winningScoreInt = 3;

const playerBtnArr = [p1BtnElem, p2BtnElem];
const playerDispArr = [p1DisplayElem, p2DisplayElem];

p1ArgsObj = {
    scoreInt: 0,
    playerDispElem: p1DisplayElem
};

p2ArgsObj = {
    scoreInt: 0,
    playerDispElem: p2DisplayElem
};

function incrementScore(argsObj) {
    if (isGameOver) return;

    argsObj['scoreInt'] += 1;

    if (argsObj['scoreInt'] >= winningScoreInt)
        _playerWins(argsObj)

    argsObj['playerDispElem'].innerText = argsObj['scoreInt'];
}

function _playerWins(argsObj) {
    isGameOver = true;

    for (let btnElem of playerBtnArr) {
        btnElem.disabled = true;
    }
    
    for (let dispElem of playerDispArr) {
        if (dispElem !== argsObj['playerDispElem'])
            dispElem.classList.add('has-text-danger');
    }

    argsObj['playerDispElem'].classList.add('has-text-success');
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
    p2ArgsObj['scoreInt'] = 0;

    for (let btnElem of playerBtnArr) {
        btnElem.disabled = false;
    }

    for (let dispElem of playerDispArr) {
        dispElem.classList.remove('has-text-success');
        dispElem.classList.remove('has-text-danger');
    
        dispElem.innerText = 0;
    }
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