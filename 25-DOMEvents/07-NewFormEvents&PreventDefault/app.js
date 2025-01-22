const formElem = document.querySelector('#shelterForm');
formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log('submitted');
});