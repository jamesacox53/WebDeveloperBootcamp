function setBackgroundColor(newColorStr, delayInt) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            document.body.style.backgroundColor = newColorStr;
            resolve();

        }, delayInt);
    });
}

document.body.style.backgroundColor = 'red';

async function rainbow() {
    await setBackgroundColor('orange', 1000);
    await setBackgroundColor('yellow', 1000);
    await setBackgroundColor('green', 1000);
    await setBackgroundColor('blue', 1000);
    await setBackgroundColor('indigo', 1000);
    await setBackgroundColor('violet', 1000);

    return "End of Rainbow";
}

rainbow().then((msg) => console.log(msg));

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

async function makeTwoRequests() {
    let data1Str = await fakeRequest('/page1');
    console.log(data1Str);   
}

makeTwoRequests();