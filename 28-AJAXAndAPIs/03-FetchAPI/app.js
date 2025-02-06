fetch('https://swapi.tech/api/people/1')
.then(res => {
    console.log('Resolved 1');
    console.log(res);
    
    return res.json();
})
.then(data => {
    console.log('Data 1');
    console.log(data.result.properties);

    return fetch('https://swapi.tech/api/people/2');
})
.then(res => {
    console.log('Resolved 2');
    console.log(res);
    
    return res.json();
})
.then(data => {
    console.log('Data 2');
    console.log(data.result.properties);

    return loadStarWarsPeople();
})
.catch(err => {
    console.log('Error');
    console.log(err);
});



async function loadStarWarsPeople() {
    try {
        const res3 = await fetch('https://swapi.tech/api/people/3');
        const data3 = await res3.json();

        console.log('Data 3');
        console.log(data3.result.properties);

        const res4 = await fetch('https://swapi.tech/api/people/4');
        const data4 = await res4.json();

        console.log('Data 4');
        console.log(data4.result.properties);
    
    } catch (err) {
        console.log('Error');
        console.log(err);
    }
}