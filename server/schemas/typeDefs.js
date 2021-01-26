const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        myPalettes: [Palette]
        favorites: [Palette]
    }

    type Palette {
        _id: ID
        title: String
        description: String
        secondary: String
        accent1: String
        accent2: String
        accent3: String
    }
`;

module.exports = typeDefs;