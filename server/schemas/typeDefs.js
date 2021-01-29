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
        primary: String
        secondary: String
        accent1: String
        accent2: String
        accent3: String
        username: String
        upvotes: [User]
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        palettes(username: String): [Palette]
        palette(_id: ID!): Palette
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(
            username: String!
            email: String!
            password: String!
        ): Auth
        addPalette(
            title: String!
            description: String!
            primary: String!
            secondary: String!
            accent1: String!
            accent2: String!
            accent3: String!
        ): Palette
        removePalette(_id: ID!): User
        addUpvote(paletteId: ID!): Palette
        addFavPalette(paletteId: ID!): User
    }
`;

module.exports = typeDefs;