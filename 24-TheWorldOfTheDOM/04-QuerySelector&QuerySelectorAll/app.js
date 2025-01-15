const pElem = document.querySelector('p');
console.dir(pElem);

const bannerElem = document.querySelector('#banner');
console.dir(bannerElem);

const squareElem = document.querySelector('.square');
console.dir(squareElem);

const secondImgElem = document.querySelector('img:nth-of-type(2)');
console.dir(secondImgElem);

const javaElem = document.querySelector('a[title="Java"]');
console.dir(javaElem);

const pList = document.querySelectorAll('p');
console.dir(pList);

const imgList = document.querySelectorAll('img');
console.dir(imgList);

const anchorList = document.querySelectorAll('p a');
console.dir(anchorList);

for (let anchorElem of anchorList) {
    console.log(anchorElem.href);
}