const h2Elem = document.querySelector('h2');
console.dir(h2Elem);

/*
function myAddClass(elem, classStr) {
    const currClassStr = elem.getAttribute('class');

    if (currClassStr) {
        const newClassStr = currClassStr + ' ' + classStr;

        elem.setAttribute('class', newClassStr);
    
    } else {
        elem.setAttribute('class', classStr);
    }
}

myAddClass(h2Elem, 'purple');
myAddClass(h2Elem, 'border');
*/

h2Elem.classList.add('purple');
h2Elem.classList.add('border');

h2Elem.classList.remove('purple');

console.log(h2Elem.classList.contains('border'));

h2Elem.classList.toggle('border');
h2Elem.classList.toggle('purple');