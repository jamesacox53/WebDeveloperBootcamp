axios.get('https://swapi.tech/api/people/1')
.then(res => {
    console.log('Response');
    console.log(res);

    return printStarWarsPeople();
})
.catch(err => {
    console.log('Error');
    console.log(err);
});


async function printStarWarsPeople() {
    try {
        await printStarWarsPerson(2);

        await printStarWarsPerson(3);

        await printStarWarsPerson(30);
    
    } catch (err) {
        console.log('Error');
        console.log(err);
    }
}

async function printStarWarsPerson(id) {
    const res = await axios.get('https://swapi.tech/api/people/' + id);

    console.log('Data for: ' + id);
    console.log(res.data.result.properties);
}