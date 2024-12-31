function add (x, y) {
    if (typeof x != 'number' || typeof y != 'number')
        return NaN;
    
    return x + y;
}

console.log(add('a', 4));

console.log(add(9, 4));

let sum = add(9, 4);

console.log(sum);

console.log(add(add(9, 4), 5));