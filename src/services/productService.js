const Product = require('../models/productSchema');

module.exports = {
    getAllProducts: async () => {
        return await Product.find();
    },
    getProductById: async (_id) => {
        return await Product.findById(_id);
    },
    createProduct: async (name, description, price, category, brand, stock, createdAt, images) => {
        const product = new Product({ name, description, price, category, brand, stock, createdAt, images });
        return await product.save();
    },
    updateProduct: async (_id, name, description, price, category, brand, stock, createdAt, images) => {
        return await Product.findByIdAndUpdate(_id, { _id, name, description, price, category, brand, stock, createdAt, images });
    },
    deleteProduct: async (_id) => {
        return await Product.findByIdAndDelete(_id);
    }
}