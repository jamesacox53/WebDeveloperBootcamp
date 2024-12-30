function greet(firnstNameStr, lastNameStr) {
    const messageStr = 'Hey there, ' + firnstNameStr + ' ' +
        lastNameStr[0] +'.';

    console.log(messageStr);
}

greet('John', 'Wayne');
greet('Jane', 'Doe');

function repeat(wordStr, numTimesInt) {
    let outputStr = '';

    for (let i = 1; i <= numTimesInt; i++) {
        outputStr += wordStr;
    }

    console.log(outputStr);
}

repeat('hi', 3);