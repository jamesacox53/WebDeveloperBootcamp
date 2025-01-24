const sectionElem = document.querySelector('#section');
const paragraphElem = document.querySelector('#paragraph');
const btnElem = document.querySelector('#button');

sectionElem.addEventListener('click', function() {
    alert('Section');
});

paragraphElem.addEventListener('click', function() {
    alert('Paragraph');
});

btnElem.addEventListener('click', function() {
    alert('Button');
});

const buttonElem = document.querySelector('#changeColor');
const containerElem = document.querySelector('#container');

buttonElem.addEventListener('click', function(e) {
    containerElem.style.backgroundColor = getRandRGBColorStr();

    e.stopPropagation();
});

containerElem.addEventListener('click', function() {
    containerElem.classList.add('hide');
});

function getRandRGBColorStr() {
    const rInt = getRandColorCompInt();
    const gInt = getRandColorCompInt();
    const bInt = getRandColorCompInt();

    return 'rgb(' + rInt +', ' + gInt + ', ' + bInt + ')';
}

function getRandColorCompInt() {
    return Math.floor(Math.random() * 256);
}