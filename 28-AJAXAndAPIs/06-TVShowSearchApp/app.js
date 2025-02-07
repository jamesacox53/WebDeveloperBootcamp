const searchFormElem = document.querySelector('#searchForm');
searchFormElem.addEventListener('submit', searchTVShows);

async function searchTVShows(e) {
    e.preventDefault();

    const queryElem = this.elements.query;
    if (!queryElem) return;

    const searchStr = queryElem.value;
    if (!searchStr) return;

    await _addTVShows(searchStr);

    queryElem.value = '';
}

async function _addTVShows(searchStr) {
    const urlStr = 'https://api.tvmaze.com/search/shows';
    
    const optionsObj = {
        params: {
            q: searchStr
        }
    }

    const res = await axios.get(urlStr, optionsObj);

    _addImageElems(res);
}

function _addImageElems(res) {
    const dataArr = res['data'];
    if (!dataArr) return;

    for (tvShowObj of dataArr) {
        const imageURLStr = _getImageURLStr(tvShowObj);
        if (!imageURLStr) continue;

        _addImageElem(imageURLStr);
    }
}

function _getImageURLStr(tvShowObj) {
    const show = tvShowObj['show'];
    if (!show) return;

    const image = show['image'];
    if (!image) return;

    const medium = image['medium'];
    if (!medium) return;

    return medium.toString();
}

function _addImageElem(imageURLStr) {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', imageURLStr);

    document.body.append(imgElem);
}