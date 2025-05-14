const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

main();

async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/relationshipDB');

        // await makeProducts();
        // await makeFarm();
        // await addProduct();
        await mongoosePopulate();

        console.log("Mongo connection open");

    } catch (err) {
        console.log("Mongo connection error");
        console.log(err);
    }
}

async function makeProducts() {
    const res = await Product.insertMany([
        { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
        { name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer' },
        { name: 'Asparagus', price: 3.99, season: 'Spring' }
    ]);
    
    console.log(res);
}

async function makeFarm() {
    const farm = new Farm({
        name: 'Full Belly Farms',
        city: 'Guinda, CA'
    });

    const melon = await Product.findOne({ name: 'Goddess Melon' });

    farm.products.push(melon);

    const res = await farm.save();
    console.log(res);
}

async function addProduct() {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const waterMelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });

    farm.products.push(waterMelon);

    const res = await farm.save();
    console.log(res);
}

async function mongoosePopulate() {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products');
    console.log(farm);
}