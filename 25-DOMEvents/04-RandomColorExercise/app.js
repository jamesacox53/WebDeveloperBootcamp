const h1Elem = document.querySelector('h1');
const buttonElem = document.querySelector('button');

function getRandRGBColorStr() {
    const rInt = getRandColorCompInt();
    const gInt = getRandColorCompInt();
    const bInt = getRandColorCompInt();

    return 'rgb(' + rInt +', ' + gInt + ', ' + bInt + ')';
}

function getRandColorCompInt() {
    return Math.floor(Math.random() * 256);
}

buttonElem.addEventListener('click', function() {
    const colorStr = getRandRGBColorStr(); 

    document.body.style.backgroundColor = colorStr;
    h1Elem.innerText = colorStr;
});