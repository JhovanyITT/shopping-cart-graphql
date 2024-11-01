const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    brand: { type: String, require: true },
    stock: { type: Number, require: true },
    createdAt: { type: String, require: true },
    images: { type: [String], required: false },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;