const buttonElem = document.querySelector('#example-button');

function scream() {
    console.log('AAAAAAAAAAAAAHHHHHHHHH');
}

buttonElem.addEventListener('mousedown', scream);

buttonElem.addEventListener('mouseup', function() {
    alert('Mouse up');
});

function twist() {
    console.log("twist");
}

function shout() {
    console.log("shout");
}

const tasButtonElem = document.querySelector('#tas');

tasButtonElem.addEventListener('click', twist, { once: true });
tasButtonElem.addEventListener('click', shout);