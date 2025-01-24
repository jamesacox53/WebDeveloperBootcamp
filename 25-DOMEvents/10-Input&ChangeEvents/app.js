const inputElem = document.querySelector('input');
const h1Elem = document.querySelector('h1');

inputElem.addEventListener('change', function(e) {
    console.log('Change Event');
});

inputElem.addEventListener('input', function(e) {
    console.log('Input Event');
    
    h1Elem.innerText = inputElem.value;
});