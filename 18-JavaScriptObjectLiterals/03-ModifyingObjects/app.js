const midterms = {
    danielle: 96,
    thomas: 78
};

console.log(midterms);

midterms.thomas = 79;
console.log(midterms);

midterms['danielle'] = 'A';
midterms['thomas'] = 'C+';
console.log(midterms);

midterms.ezra = 'B+';
console.log(midterms);

midterms['antonio'] = 'A-';
console.log(midterms);