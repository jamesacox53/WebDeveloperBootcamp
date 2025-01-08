const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumsArr = numbersArr.filter(n => n % 2 === 0);
console.log(evenNumsArr);

const smallNumsArr = numbersArr.filter(n => n < 10);
console.log(smallNumsArr);

const moviesArr = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

const bestMoviesArr = moviesArr.filter(m => m.score > 80);
console.log(bestMoviesArr);

const badMoviesArr = moviesArr.filter(m => m.score < 70);
console.log(badMoviesArr);

const recentMoviesArr = moviesArr.filter(m => m.year > 2000);
console.log(recentMoviesArr);

const bestMoviesTitleArr = bestMoviesArr.map(m => m.title);
console.log(bestMoviesTitleArr);

const bestMoviesTitle2Arr = 
    moviesArr.filter(m => m.score > 80).map(m => m.title);

console.log(bestMoviesTitle2Arr);