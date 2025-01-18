const baseURLStr = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const containerElem = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const pokemonElem = createPokemonElem(baseURLStr, i);

    containerElem.appendChild(pokemonElem);
}

function createPokemonElem(baseURLStr, i) {
    const divElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const spanElem = document.createElement('span');
    
    const spriteURLStr = baseURLStr + i + '.png';
    imgElem.setAttribute('src', spriteURLStr);
    divElem.appendChild(imgElem);

    spanElem.innerText = '#' + i;
    divElem.appendChild(spanElem);

    divElem.classList.add('pokemon');
    
    return divElem;
}