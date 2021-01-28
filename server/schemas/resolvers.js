const { AuthenticationError } = require('apollo-server-express');
const { User, Palette } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({
					_id: context.user._id,
				})
					.select('-__v -password');
				return userData;
			}

			throw new AuthenticationError('Not logged in');
        },
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select('-__v -password')
				.populate('myPalettes')
				.populate('favorites');
        },
        palettes: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Palette.find(params).sort({ createdAt: -1 });
		},
		palette: async (parent, { _id }) => {
			return Palette.findOne({ _id });
		},
    },
    Mutation: {
        addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new AuthenticationError(
					'Incorrect credentials'
				);
			}

			const correctPw = await user.isCorrectPassword(
				password
			);

			if (!correctPw) {
				throw new AuthenticationError(
					'Incorrect credentials'
				);
			}

			const token = signToken(user);
			return { token, user };
        },
        addPalette: async (parent, args, context) => {
            console.log("context user ------");
            console.log(context.user);
			if (context.user) {
				const palette = await Palette.create({
					...args,
					username: context.user.username,
                });
                console.log("palette below")
                const id = palette._id;
                console.log(id);

				await User.findByIdAndUpdate(
                    { _id: context.user._id },
					{ $push: { myPalettes: id } },
					{ new: true }
                );

                console.log({palette});
				return palette;
			}

			throw new AuthenticationError(
				'You need to be logged in to add a palette!'
			);
        },
        removePalette: async (parent, {_id}, context) => {
			if (context.user) {
				const deletePalette = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: { myPalettes: {_id} } },
					{ new: true, runValidators: true }
				);

				delete deletePalette;

				return deletePalette;
			}
        },
    }
};

module.exports = resolvers;