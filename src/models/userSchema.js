const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, require: true },
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    registrationDate: { type: String, require: true },
    userTipe: { type: String, require: true },
    preferredPaymentMethod: { type: [String], require: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;