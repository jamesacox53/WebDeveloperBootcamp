const pElem = document.querySelector('p');
console.dir(pElem);
console.log(pElem.innerText);
console.log(pElem.textContent);
console.log(pElem.innerHTML);

pElem.innerText = 'Replaced Text';

const imgElem = document.querySelector('img');
console.dir(imgElem);

const aList = document.querySelectorAll('a');

for (let aElem of aList) {
    aElem.innerText = 'I am a Link!!!';
}

const h1Elem = document.querySelector('h1');
console.log(h1Elem.innerHTML);

h1Elem.innerHTML = '<i>sdkfsdkfsdkfsd</i>';
h1Elem.innerHTML += '<sup>asdfasdf</sup>';