const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log('Connection Open!!!');

    const Product = createProductModel();

    try {
        // const data = await createProducts(Product);
        // const data = await updateProducts(Product);
        // const data = await createProducts(Product);

        const data = await findProduct(Product);

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
            required: true,
            maxLength: 20
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price must be positive']
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: {
            type: [String],
            default: ['Cycling']
        },
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    });

    productSchema.methods.greet = function() {
        console.log(`Hello from ${this.name}`);
    };

    productSchema.methods.toggleOnSale = function() {
        this.onSale = !this.onSale;

        return this.save();
    };

    productSchema.methods.addCategory = function(newCategoryStr) {
        this.categories.push(newCategoryStr);

        return this.save();
    };
    
    return mongoose.model('Product', productSchema);
}

async function createProducts(Product) {
    const bike = new Product({
        name: 'Mountain Bike',
        price: 599
    });

    // return bike.save();

    const bikeHelmet = new Product({
        name: 'Bike Helmet',
        price: 29.50
    });

    // return bikeHelmet.save();

    const bikeHelmet2 = new Product({
        name: 'Bike Helmet From Helmet Makers',
        price: 29.50
    });

    // return bikeHelmet2.save();

    const bike2 = new Product({
        name: 'Mountain Bike2',
        price: 599,
        categories: ['Cycling', 'Safety']
    });

    // return bike2.save();

    const bike3 = new Product({
        name: 'Mountain Bike3',
        price: 599,
        categories: ['Cycling', 'Safety']
    });

    // return bike3.save();

    const tirePump = new Product({
        name: 'Tire Pump',
        price: 19.50,
        categories: ['Cycling']
    });

    // return tirePump.save();

    const cyclingJersey = new Product({
        name: 'Cycling Jersey',
        price: 70,
        categories: ['Cycling'],
        size: 'XM'
    });

    cyclingJersey.greet();

    return '';
}

async function updateProducts(Product) {
    return Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true, runValidators: true }).exec();
}

async function findProduct(Product) {
    const product = await Product.findOne({ name: 'Bike Helmet' }).exec();

    product.greet();

    await product.toggleOnSale();

    return product.addCategory('Outdoors');
}