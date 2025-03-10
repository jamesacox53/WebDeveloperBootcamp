const user1 = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
};

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    // died: 2002,
    city: 'Tulsa',
    state: 'Oklahoma'
};

function getFullNameStr({ firstName, lastName = 'Smith' }) {
    return firstName + ' ' + lastName;
}

console.log(getFullNameStr(user1));
console.log(getFullNameStr(user2));

const user3 = {
    firstName: 'George'
};

console.log(getFullNameStr(user3));

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

const goodMoviesArr = moviesArr.filter(({ score }) => score >= 90);
console.log(goodMoviesArr);

const movieDescArr = moviesArr.map(({ title, year, score }) => {
    return title + ' (' + year + ') is rated ' + score;
});
console.log(movieDescArr);