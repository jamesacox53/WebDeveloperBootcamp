const liElem = document.querySelector('li');

const ulElem = liElem.parentElement;
ulElem.removeChild(liElem);

const imgElem = document.querySelector('img');
imgElem.remove();