const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID! 
        fullName: String!
        email: String!
        password: String!
        address: String!
        registrationDate: String!
        userTipe: String!
        preferredPaymentMethod: [String!]!
    }
    
    type Query {
        users: [User]!
        user(_id: ID!): User
    }

    type Mutation {
        createUser(
            fullName: String!
            email: String!
            password: String!
            address: String!
            registrationDate: String!
            userTipe: String!
            preferredPaymentMethod: [String!]!
        ): User!

        updateUser(
            _id: ID! 
            fullName: String
            email: String
            password: String
            address: String
            registrationDate: String
            userTipe: String
            preferredPaymentMethod: [String!]
        ): User!

        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;
