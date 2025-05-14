const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

main();

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/relationshipDB');

        // await makeTweets();
        // await makeTweets2();
        await findTweet();

        console.log("Mongo connection open");

    } catch (err) {
        console.log("Mongo connection error");
        console.log(err);
    }
}

async function makeTweets() {
    const user = new User({ username: 'chickenfan99', age: 61 });
    
    const tweet1 = new Tweet({ text: 'I love my chicken family', likes: 0 });
    tweet1.user = user;

    const res1 = await user.save();
    console.log(res1);

    const res2 = await tweet1.save();
    console.log(res2);
}

async function makeTweets2() {
    const user = await User.findOne({ username: 'chickenfan99' });
    
    const tweet2 = new Tweet({ text: 'bock bock bock', likes: 1234 });
    tweet2.user = user;

    const res = await tweet2.save();
    console.log(res);
}

async function findTweet() {
    const tweet = await Tweet.findOne({}).populate('user', 'username');
    console.log(tweet);
}