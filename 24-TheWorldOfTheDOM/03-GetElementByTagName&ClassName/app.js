const imgColl = document.getElementsByTagName('img');
console.dir(imgColl);

console.dir(imgColl[1]);

for (let imgElem of imgColl) {
    console.log(imgElem.src);
}

for (let imgElem of imgColl) {
    imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const anchorColl = document.getElementsByTagName('a');
console.dir(anchorColl);

const squareColl = document.getElementsByClassName('square');

for (let imgElem2 of squareColl) {
    imgElem2.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
}