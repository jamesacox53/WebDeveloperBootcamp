const jokesBtnElem = document.querySelector('#jokesBtn');
const jokesULElem = document.querySelector('#jokesUL');

async function addDadJoke() {
    try {
        await _addDadJoke();
    
    } catch (err) {
        console.log(err);
    }
}

async function _addDadJoke() {
    const res = await _reqDadJoke();

    const jokeStr = _getJokeStr(res);
    if (!jokeStr) return;

    _addJoke(jokeStr);
}

async function _reqDadJoke() {
    const urlStr = 'https://icanhazdadjoke.com/';

    const optionsObj = {
        headers: {
            Accept: 'application/json'
        }
    };

    return axios.get(urlStr, optionsObj);
}

function _getJokeStr(res) {
    if (!res) return;

    const data = res['data'];
    if (!data) return;

    const joke = data['joke'];
    if (!joke) return;

    const jokeStr = joke.toString();
    return jokeStr;
}

function _addJoke(jokeStr) {
    const liElem = document.createElement('li');
    liElem.innerText = jokeStr;

    jokesULElem.append(liElem);
}

jokesBtnElem.addEventListener('click', function(e) {
    addDadJoke();
});