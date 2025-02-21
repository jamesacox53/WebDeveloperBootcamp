class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);

        this.livesLeft = livesLeft;
    }

    meow() {
        return 'Meow!';
    }
}

class Dog extends Pet {
    bark() {
        return 'Woof!';
    }

    eat() {
        return `${this.name} scarfs his food!`;
    }
}

const monty = new Cat('Monty', 9, 3);
console.log(monty);
console.log(monty.eat());
console.log(monty.meow());

const wyatt = new Dog('Wyatt', 13);
console.log(wyatt);
console.log(wyatt.eat());
console.log(wyatt.bark());