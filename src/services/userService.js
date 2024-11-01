const User = require('../models/userSchema');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
    getUserById: async (_id) => {
        return await User.findById(_id);
    },
    createUser: async (fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod) => {
        const user = new User({ fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod });
        return await user.save();
    },
    updateUser: async (_id, fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod) => {
        return await User.findByIdAndUpdate(_id, { fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod });
    },
    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    }
}