const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data is here');

            } else {
                reject('Request Error');
            }
        }, 1000);
    });
};

const req = fakeRequest('/dogs/1');
req.then((msg) => {
    console.log(msg);
})
.catch((msg) => {
    console.log(msg);
});

function setBackgroundColor(newColorStr, delayInt) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            document.body.style.backgroundColor = newColorStr;
            resolve();

        }, delayInt);
    });
}

document.body.style.backgroundColor = 'red';

setBackgroundColor('orange', 1000)
.then(() => setBackgroundColor('yellow', 1000))
.then(() => setBackgroundColor('green', 1000))
.then(() => setBackgroundColor('blue', 1000))
.then(() => setBackgroundColor('indigo', 1000))
.then(() => setBackgroundColor('violet', 1000));