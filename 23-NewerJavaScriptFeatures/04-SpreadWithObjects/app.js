const felineObj = { legs: 4, family: 'Felidae' };
const canineObj = { isFurry: true, family: 'Caninae' };

const leopardObj = { ...felineObj, colorStr: 'black' };
console.log(leopardObj);

const catDogObj = { ...felineObj, ...canineObj };
console.log(catDogObj);

console.log({ ...[2, 4, 6, 8] });

console.log({ ..."ABCDE" });

const formDataObj = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
};

const newUserObj = {
    ...formDataObj,
    id: 2345,
    isAdmin: false
};

console.log(newUserObj);