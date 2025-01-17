const bElem = document.querySelector('b');
console.dir(bElem);

const parentElem = bElem.parentElement;
console.dir(parentElem);

const grandParentElem = parentElem.parentElement;
console.dir(grandParentElem);

const greatGrandParentElem = grandParentElem.parentElement;
console.dir(greatGrandParentElem);

console.log(parentElem.childElementCount);
console.dir(parentElem.children);
console.dir(parentElem.children[0]);

const squareElem = document.querySelector('.square');

const nextElem = squareElem.nextElementSibling;
console.dir(nextElem);

const prevElem = squareElem.previousElementSibling;
console.dir(prevElem);