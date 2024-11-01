const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {
    Query: {
        users: () => {
            return userService.getAllUsers();
        },
        user: (_, { _id }) => {
            return userService.getUserById(_id);
        }
    },
    Mutation: {
        createUser: (_, { fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod }) => {
            return userService.createUser(fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod);
        },
        updateUser: (_, { _id, fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod }) => {
            return userService.updateUser(_id, fullName, email, password, address, registrationDate, userTipe, preferredPaymentMethod);
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        },
    }
};

module.exports = resolvers;