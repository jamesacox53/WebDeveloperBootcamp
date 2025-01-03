function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);

function callTenTimes(func) {
    for (let i = 1; i <= 10; i++) {
        func();
    }
}

callTenTimes(rollDie);