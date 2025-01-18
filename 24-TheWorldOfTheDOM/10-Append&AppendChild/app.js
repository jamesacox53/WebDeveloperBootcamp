const imgElem = document.createElement('img');
console.dir(imgElem);

const chickenSrcStr = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';

imgElem.setAttribute('src', chickenSrcStr);
imgElem.classList.add('square');

document.body.appendChild(imgElem);

const h3Elem = document.createElement('h3');

h3Elem.innerText = 'I am new!';

document.body.appendChild(h3Elem);

const pElem = document.querySelector('p');
pElem.append('I am new text!', 'afasdfasdfasdf');

const bElem = document.createElement('b');
bElem.append('Hi!!!!');

pElem.prepend(bElem);

const h2Elem = document.createElement('h2');
h2Elem.append("Are adorable chickens");

const h1Elem = document.querySelector('h1');

h1Elem.insertAdjacentElement('afterend', h2Elem);

const h3Elem2 = document.createElement('h3');
h3Elem2.innerText = 'I am h3';

h1Elem.after(h3Elem2);