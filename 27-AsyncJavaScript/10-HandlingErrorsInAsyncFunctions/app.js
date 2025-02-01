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
    try {
        let data1Str = await fakeRequest('/page1');
        console.log(data1Str);

        let data2Str = await fakeRequest('/page2');
        console.log(data2Str);
    
    } catch(err) {
        console.log(err);
    }
}

makeTwoRequests();