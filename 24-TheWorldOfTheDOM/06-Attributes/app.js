const bannerElem = document.querySelector('#banner');
console.dir(bannerElem);

console.log(bannerElem.id);
console.log(bannerElem.src);

const firstLinkElem = document.querySelector('a');
console.log(firstLinkElem.href);

console.log(firstLinkElem.getAttribute('href'));
console.log(firstLinkElem.getAttribute('id'));
console.log(firstLinkElem.getAttribute('class'));
console.log(firstLinkElem.getAttribute('title'));

firstLinkElem.setAttribute('href', 'https://www.google.com');

const inputElem = document.querySelector('input[type="text"]');

inputElem.type = 'color';
inputElem.setAttribute('type', 'color');