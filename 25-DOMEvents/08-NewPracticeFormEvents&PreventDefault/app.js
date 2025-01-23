const formElem = document.querySelector('#shelterForm');
const catList = document.querySelector('#catList');
const catNameElem = document.querySelector('#catName');

formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const liElem = document.createElement('li');
    liElem.innerText = catNameElem.value;

    catList.appendChild(liElem);
    catNameElem.value = "";
});