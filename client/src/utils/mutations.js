import gql from 'graphql-tag';

// logging in a user with username and password
export const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

// creating a user
export const ADD_USER = gql`
	mutation addUser(
		$username: String!
		$email: String!
		$password: String!
	) {
		addUser(
			username: $username
			email: $email
			password: $password
		) {
			token
			user {
				_id
				username
			}
		}
	}
`;

// creating a palette
export const ADD_PALETTE = gql`
	mutation addPalette(
        $title: String!
        $description: String!
        $primary: String!
        $secondary: String!
        $accent1: String!
        $accent2: String!
        $accent3: String!
        ) {
            addPalette(
                title: $title
                description: $description
                primary: $primary
                secondary: $secondary
                accent1: $accent1
                accent2: $accent2
                accent3: $accent3
            ) {
                _id
                title
                description
                primary
                secondary
                accent1
                accent2
                accent3
		}
	}
`;

// removing a palette from the user's created palettes
// export const REMOVE_PALETTE = gql`
// 	mutation removePalette($_id: ID!) {
// 		removePalette(_id: $_id) {
// 			_id
// 			username
// 			myPalettes {
//                 _id
//             }
// 		}
// 	}
// `;

// adding an upvote to a palette
export const ADD_UPVOTE = gql`
	mutation addUpvote($paletteId: ID!) {
		addUpvote(paletteId: $paletteId) {
				_id
				title
				description
				primary
				secondary
				accent1
				accent2
				accent3
				upvotes {
					_id
				}
		}
	}
`;

// book marking a palette
export const ADD_FAV_PALETTE = gql`
	mutation addFavPalette($paletteId: ID!) {
		addFavPalette(paletteId: $paletteId) {
				_id
				title
				description
				primary
				secondary
				accent1
				accent2
				accent3
				upvotes {
					_id
				}
				saves {
					_id
				}
		}
	}
`;

// creating a tag for a palette
export const CREATE_TAG =gql `
	mutation createTag($name: String!) {
		createTag(name: $name) {
			_id
			name
			taggedPalettes{
				_id
			}
		}
	}
`;

// linking a tag to a palette
export const LINK_TAG_TO_PALETTE = gql `
	mutation linkTagToPalette($paletteId: ID! $tagId: ID!) {
		linkTagToPalette(paletteId: $paletteId tagId: $tagId) {
			_id
			name
			taggedPalettes {
				_id
			}
		}
	}
`;

// creating a new donation tier so we can get money
export const ADD_DONATION_TIER = gql `
	mutation addDonationTier($name: String! $description: String! $price: Number!) {
		addDonationTier(name: $name description: $description price: $price) {
			_id
			name
			description
			price
		}
	}
`