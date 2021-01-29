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
        tags: [String]
        upvotes: [User]
        createdAt: String
        saves: [User]
    }
    
    type Tag {
        _id: ID
        name: String!
        taggedPalettes: [Palette]
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
        tag(name: String!): Tag
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
            tags: [String]
        ): Palette
        removePalette(_id: ID!): User
        addUpvote(paletteId: ID!): Palette
        addFavPalette(paletteId: ID!): User
        createTag(name: String!): Tag
        linkTagToPalette(paletteId: ID! tagId: ID!): Tag
    }
`;

module.exports = typeDefs;