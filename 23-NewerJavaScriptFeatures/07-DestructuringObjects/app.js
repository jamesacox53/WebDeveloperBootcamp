const user = {
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

const {
    email,
    firstName,
    lastName,
    city,
    bio,
    born: birthYearInt,
    died: deathYearInt
} = user;

console.log(email);
console.log(firstName);
console.log(lastName);
console.log(city);
console.log(bio);
console.log(birthYearInt);
console.log(deathYearInt);

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    // died: 2002,
    city: 'Tulsa',
    state: 'Oklahoma'
};

const {
    city: city2Int,
    state: state2Int,
    died: deathYear2 = 'N/A'
} = user2;

console.log(city2Int);
console.log(state2Int);
console.log(deathYear2);