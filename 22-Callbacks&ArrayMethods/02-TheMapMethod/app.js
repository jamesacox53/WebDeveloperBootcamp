const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doublesArr = numbersArr.map(function (num) {
    return num * 2;
});

console.log(doublesArr);

const moviesArr = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];

titlesArr = moviesArr.map(function(movieObj) {
    return movieObj.title;
});

console.log(titlesArr);