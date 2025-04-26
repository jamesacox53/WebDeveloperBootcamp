const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log('Connection Open!!!');

    const Person = createPersonModel();

    try {
        const data = await createPerson(Person);

        console.log("IT WORKED!")
        console.log(data);

    } catch(err) {
        console.log("IT DIDN'T WORK!!!");
        console.log(err);
    }
}

function createPersonModel() {
    const personSchema = new mongoose.Schema({
        first: String,
        last: String
    });

    personSchema.virtual('fullName').get(function() {
        return `${this.first} ${this.last}`;
    })
    
    return mongoose.model('Person', personSchema);
}

async function createPerson(Person) {
    const tammy = new Person({
        first: 'Tammy',
        last: 'Chow'
    });

    return tammy.save();
}