const buttonElem = document.querySelector('button');

buttonElem.addEventListener('click', function(event) {
    console.log(event);
});

const inputElem = document.querySelector('input[type="text"]');

inputElem.addEventListener('keydown', function(event) {
    console.log('KeyDown');
    console.log(event);
    console.log(event.key);
    console.log(event.code);
});

// inputElem.addEventListener('keyup', function(event) {
//     console.log('KeyUp');
// });

window.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'ArrowUp': {
            console.log('UP');
            break;
        }
        case 'ArrowDown': {
            console.log('Down');
            break;
        }
        case 'ArrowLeft': {
            console.log('Left');
            break;
        }
        case 'ArrowRight': {
            console.log('Right');
            break;
        }
        default: {
            console.log('Ignored');
        }
    }
});