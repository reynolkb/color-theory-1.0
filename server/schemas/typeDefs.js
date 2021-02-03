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
        tags: [Tag]
        upvoteCount: Int
        upvotes: [User]
        createdAt: String
        saveCount: Int
        saves: [User]
    }
    
    type Tag {
        _id: ID
        name: String!
        taggedPalettes: [Palette]
    }

    type DonationTier {
        _id: ID
        name: String!
        description: String!
        price: Int!
    }

    type Checkout {
        session: ID
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
        tags: [Tag]
        searchAllPalettes: [Palette]
        searchDonationTier(name: String!): DonationTier
        checkout(name: String!): Checkout
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
        addFavPalette(paletteId: ID!): Palette
        createTag(name: String!): Tag
        linkTagToPalette(paletteId: ID! tagId: ID!): Tag
        addDonationTier(
            name: String!
            description: String!
            price: Int
        ): DonationTier
    }
`;

module.exports = typeDefs;