const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        category: String!
        brand: String!
        stock: Int!
        createdAt: String!
        images: [String!]!
    }
    
    type Query {
        products: [Product]!
        product(_id: ID!): Product
    }

    type Mutation {
        createProduct(
            name: String!
            description: String!
            price: Float!
            category: String!
            brand: String!
            stock: Int!
            createdAt: String!
            images: [String!]!
        ): Product!

        updateProduct(
            _id: ID!
            name: String
            description: String
            price: Float
            category: String
            brand: String
            stock: Int
            createdAt: String
            images: [String!]
        ): Product!

        deleteProduct(_id: ID!): Product!
    }
`;

module.exports = typeDefs;
