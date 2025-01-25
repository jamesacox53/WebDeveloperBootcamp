const tweetFormElem = document.querySelector('#tweetForm');
const tweetList = document.querySelector('#tweetList');

tweetFormElem.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameElem = tweetFormElem.elements.username;
    const tweetElem = tweetFormElem.elements.tweet;

    const tweetLiElem = getTweetLiElem(usernameElem, tweetElem);

    tweetList.appendChild(tweetLiElem);
    usernameElem.value = "";
    tweetElem.value = "";
});

function getTweetLiElem(usernameElem, tweetElem) {
    const userNameStr = usernameElem.value;
    const tweetStr = tweetElem.value;
    
    const tweetHTMLStr = '<b>' + userNameStr + '</b>' +
    ' - ' + tweetStr;

    const tweetLiElem = document.createElement('li');
    tweetLiElem.innerHTML = tweetHTMLStr;

    return tweetLiElem;
}

tweetList.addEventListener('click', function(e) {
    if (e.target.nodeName == 'LI')
        e.target.remove();
});