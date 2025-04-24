const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log('Connection Open!!!');

    const Product = createProductModel();

    try {
        const data = await createProducts(Product);

        console.log("IT WORKED!")
        console.log(data);

    } catch(err) {
        console.log("IT DIDN'T WORK!!!");
        console.log(err);
    }
}

function createProductModel() {
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    });
    
    return mongoose.model('Product', productSchema);
}

async function createProducts(Product) {
    const bike = new Product({
        name: 'Mountain Bike',
        price: 599
    });

    return bike.save();
}