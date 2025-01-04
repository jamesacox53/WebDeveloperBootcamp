const cat = {
    name: 'Blue Steele',
    color: 'Grey',
    Breed: 'Scottish Fold',

    meow: function() {
        console.log('This is:');
        console.log(this);
        console.log(this.name + ' says Meow');
    }
};

cat.meow();

const meow2 = cat.meow;

meow2();

function scream() {
    console.log('AHHHHHHHHH');
}

// The window object
console.log(this);

window.scream();