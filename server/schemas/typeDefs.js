const { gql } = require('apollo-server-express');

const typeDefs = gql`
# User typeDef to login/signup
    type User {
        _id: ID
        username: String
        email: String
        myPalettes: [Palette]
        favorites: [Palette]
    }
# Palette typeDef for creating a palette and interacting with them
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
# tag for each palette, they have an array of all associated palettes
    type Tag {
        _id: ID
        name: String!
        taggedPalettes: [Palette]
    }
# donation tiers for giving us money!
    type DonationTier {
        _id: ID
        name: String!
        description: String!
        price: Int!
    }
# stripe checkout
    type Checkout {
        session: ID
    }
# authentication for user logging in/logging out
    type Auth {
        token: ID!
        user: User
    }
# all queries
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
#  all mutations
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
        # removePalette(_id: ID!): User
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