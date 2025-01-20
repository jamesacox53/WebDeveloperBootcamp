const buttonElem = document.querySelector('#example-button');

buttonElem.onclick = function () {
    console.log('You Clicked Me!');
    console.log('I hope it worked!');
}

function scream() {
    console.log('AAAAAAAAAAAAAHHHHHHHHH');
}

buttonElem.onmouseenter = scream;

const h1Elem = document.querySelector('h1');

h1Elem.onclick = () => {
    alert('You clicked the h1!');
}