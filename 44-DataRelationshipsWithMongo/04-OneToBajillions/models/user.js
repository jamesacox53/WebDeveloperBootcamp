const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

main();

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/relationshipDB');

        // await makeUser();
        await addAddress('682377ee7fe9dc4a04637efa');

        console.log("Mongo connection open");

    } catch (err) {
        console.log("Mongo connection error");
        console.log(err);
    }
}

async function makeUser() {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
        addresses: [{
            street: '123 Sesame St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }]
    });

    const res = await u.save();
    console.log(res);
}

async function addAddress(id) {
    const user = await User.findById(id);

    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });

    const res = await user.save();
    console.log(res);
}