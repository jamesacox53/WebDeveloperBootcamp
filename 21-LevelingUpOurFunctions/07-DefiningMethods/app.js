const myMath = {
    PI: 3.14169,
    
    square: function(num) {
        return num * num;
    },
    
    cube: function(num) {
        return num ** 3;
    }
};

console.log(myMath.PI);

console.log(myMath.square(12));

console.log(myMath.cube(12));

const myMath2 = {
    PI: 3.14169,
    
    square(num) {
        return num * num;
    },
    
    cube(num) {
        return num ** 3;
    }
};

console.log(myMath2.PI);

console.log(myMath2.square(12));

console.log(myMath2.cube(12));