function getRandRGBColorStr() {
    const rInt = getRandColorCompInt();
    const gInt = getRandColorCompInt();
    const bInt = getRandColorCompInt();

    return 'rgb(' + rInt +', ' + gInt + ', ' + bInt + ')';
}

function getRandColorCompInt() {
    return Math.floor(Math.random() * 256);
}

function addButtons() {
    for (let i = 1; i <= 40; i++) {
        const buttonElem = document.createElement('button');
        buttonElem.innerText = 'Click';

        document.body.appendChild(buttonElem);
    }
}

addButtons();

function addH1s() {
    for (let i = 1; i <= 10; i++) {
        const h1Elem = document.createElement('h1');
        h1Elem.innerText = 'Click Me!';

        document.body.appendChild(h1Elem);
    }
}

addH1s();

function colorizeElem() {
    const rgbColor1Str = getRandRGBColorStr();
    const rgbColor2Str = getRandRGBColorStr();

    this.style.backgroundColor = rgbColor1Str;
    this.style.color = rgbColor2Str;
}

const buttonList = document.querySelectorAll('button');

for (let buttonElem of buttonList) {
    buttonElem.addEventListener('click', colorizeElem);
}

const h1List = document.querySelectorAll('h1');

for (let h1Elem of h1List) {
    h1Elem.addEventListener('click', colorizeElem);
}