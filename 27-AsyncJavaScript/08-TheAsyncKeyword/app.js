async function hello() {

}

console.log(hello());

const sing = async () => {
    return 'LA LA LA LA';
};

console.log(sing());

sing().then((msg) => console.log(msg));

async function errorFunc() {
    throw new Error('this is an error');
}

errorFunc().catch((err) => {
    console.log(err);
});

const login = async (username, password) => {
    if (!username || !password)
        throw 'Missing Credentials';

    if (password == 'corgisarecute')
        return 'Welcome!'

    throw 'Invalid Password';
}

login('sdfsdfsd')
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err);
});

login('sdfsdfsd', 'asdfsadfasdfdas')
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err);
});

login('sdfsdfsd', 'corgisarecute')
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err);
});