const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
    console.log('Connection Open!!!');

    const Movie = createMovieModel();

    try {
        // const data = await createMovies(Movie);
        // const data = await findMovies(Movie);
        // const data = await updateMovies(Movie);
        const data = await deleteMovies(Movie);

        console.log("IT WORKED!")
        console.log(data);

    } catch(err) {
        console.log("IT DIDN'T WORK!!!");
        console.log(err);
    }
}

function createMovieModel() {
    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });
    
    const Movie = mongoose.model('Movie', movieSchema);
    return Movie;
}

async function createMovies(Movie) {
    const amadeus = new Movie({
        title: 'Amadeus',
        year: 1986,
        score: 9.2,
        rating: 'R'
    });
    
    await amadeus.save();

    return Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
    ]);
}

async function findMovies(Movie) {
    // return Movie.find({}).exec();
    // return Movie.find({ rating: 'PG-13' }).exec();
    // return Movie.find({ year: { $gte: 2010 }}).exec();
    // return Movie.find({ year: { $gte: 1980, $lte: 1989 }}).exec();
    // return Movie.findOne({ year: { $gte: 1980, $lte: 1989 }}).exec();
    return Movie.findById('6807804288a56b78050d61ac').exec();
}

async function updateMovies(Movie) {
    // return Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).exec();
    // return Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] }}, { score: 10 }).exec();
    // return Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7 }).exec();
    return Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 8 }, { new: true }).exec();
}

async function deleteMovies(Movie) {
    // return Movie.deleteOne({ title: 'Amelie' }).exec();
    // return Movie.deleteMany({ year: { $gte: 1999 }}).exec();
    return Movie.findOneAndDelete({ title: 'Alien' }).exec();
}