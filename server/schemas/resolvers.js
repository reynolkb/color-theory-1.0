// imports
const { AuthenticationError } = require('apollo-server-express');
const { User, Palette, DonationTier } = require('../models');
const Tag = require('../models/Tag');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
		// loggedIn user query to get user info
        me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({
					_id: context.user._id,
				})
					.select('-__v -password')
					.populate('myPalettes')
					.populate('favorites')
				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		// get a single user by the username
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select('-__v -password')
				.populate('myPalettes')
				.populate('favorites');
		},
		// get all palettes by username
        palettes: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Palette.find(params).sort({ createdAt: -1 })
				.populate('tags');
		},
		// get single palette by id
		palette: async (parent, { _id }) => {
			return Palette.findOne({ _id })
				.populate('tags');
		},
		// get single tag by name
		tag: async (parent, {name}) => {
			return Tag.findOne({name});
		},
		// get all tags
		tags: async () => {
			return await Tag.find()
				.populate('taggedPalettes');
		},
		// get all palettes
		searchAllPalettes: async () => {
			return await Palette.find();
		},
		// get single donation tier by name
		searchDonationTier: async (parent, {name}) => {
			return await DonationTier.findOne({name});
		},
		// stripe checkout
		checkout: async (parent, {name}, context) => {
			const url = new URL(context.headers.referer).origin;
			const tier = await DonationTier.findOne({name});
			
			const line_items = [];

			// generate product id
			const product = await stripe.products.create({
				name: tier.name,
				description: tier.description
			});

			// generate price id using the product id
			const price = await stripe.prices.create({
				product: product.id,
				unit_amount: tier.price * 100,
				currency: 'usd',
			});

			// add price id to the line items array
			line_items.push({
				price: price.id,
				quantity: 1
			});

			// session variable which controls success redirect and back functionality
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items,
				mode: 'payment',
				success_url: `${url}/`,
				cancel_url: `${url}/donation`
			});
			  
			return { session: session.id }; 
		}
    },
    Mutation: {
		// create user
        addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		// login user with username and password
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
		// create a single palette
        addPalette: async (parent, args, context) => {
			if (context.user) {
				const palette = await Palette.create({
					...args,
					username: context.user.username,
                });
                const id = palette._id;

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
		// removing a palette from the user's created palettes
		// removePalette: async (parent, {_id}, context) => {
		// 	if (context.user) {
		// 		const deletePalette = await User.findByIdAndUpdate(
		// 			{ _id: context.user._id },
		// 			{ $pull: { myPalettes: {_id} } },
		// 			{ new: true, runValidators: true }
		// 		);

		// 		delete deletePalette;

		// 		return deletePalette;
		// 	}
		// },
		// like a palette
		addUpvote: async (parent, {paletteId}, context) => {
			console.log(paletteId);
			if (context.user) {
				const updatedPalette = await Palette.findOneAndUpdate(
				  { _id: paletteId },
				  { $addToSet: { upvotes: context.user._id } },
				  { new: true }
				);
			
				return updatedPalette;
			  }
			
			  throw new AuthenticationError('You need to be logged in!');
		},
		// save a palette off to favorites
		addFavPalette: async (parent, {paletteId}, context) => {
			if (context.user) {
				const updatedPalette = await Palette.findOneAndUpdate(
				  { _id: paletteId },
				  { $addToSet: { saves: context.user._id } },
				  { new: true }
				);

				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id  },
					{ $addToSet: { favorites: paletteId } },
					{ new: true }
				  );
			
				return updatedPalette;
			  }
			
			  throw new AuthenticationError('You need to be logged in!');
		},
		// create a tag
        createTag: async (parent, args) => {
			const tag = await Tag.create(args);
		
			return tag;
		},
		// link a tag to a palette
		linkTagToPalette: async (parent, {paletteId, tagId}, context) => {
			if (context.user) {
				const updatedPalette = await Palette.findOneAndUpdate(
				  { _id: paletteId },
				  { $addToSet: { tags: tagId} },
				  { new: true }
				);

				const updatedTag = await Tag.findOneAndUpdate(
					{ _id: tagId  },
					{ $addToSet: { taggedPalettes: paletteId } },
					{ new: true }
				  );
			
				return updatedTag;
			  }
			
			  throw new AuthenticationError('You need to be logged in!');
		},
		// create a donation tier
		addDonationTier: async (parent, args) => {
			const tier = await DonationTier.create(args);
		
			return tier;
		},
    }
};

module.exports = resolvers;