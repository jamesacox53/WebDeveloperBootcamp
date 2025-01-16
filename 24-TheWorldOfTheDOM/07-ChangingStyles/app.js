const h1Elem = document.querySelector('h1');
console.dir(h1Elem);

console.dir(h1Elem.style);

h1Elem.style.color = 'red';
h1Elem.style.fontSize = '3em';

const aList = document.querySelectorAll('a');

for (let aElem of aList) {
    aElem.style.color = 'rgb(0, 108, 134)';
    aElem.style.textDecorationColor = 'magenta';
    aElem.style.textDecorationStyle = 'wavy';
}

const computedStyles = window.getComputedStyle(h1Elem);

console.log(computedStyles);
console.log(computedStyles.color);
console.log(computedStyles.fontSize);