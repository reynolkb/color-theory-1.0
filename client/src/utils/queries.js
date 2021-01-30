import gql from 'graphql-tag';

export const QUERY_PALETTES = gql`
	query palettes($username: String) {
		palettes(username: $username) {
			_id
			title
            description
            primary
            secondary
            accent1
            accent2
			accent3
			username
			upvoteCount
			tags
			upvotes {
				username
			}
			createdAt
			saveCount
			saves {
				username
			}
		}
	}
`;

export const QUERY_PALETTE = gql`
	query palette($id: ID!) {
		palette(_id: $id) {
			_id
			title
            description
            primary
            secondary
            accent1
            accent2
			accent3
			username
			upvoteCount
			tags
			upvotes {
				username
			}
			createdAt
			saveCount
			saves {
				username
			}
		}
	}
`;

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			myPalettes {
                _id
			}
			favorites {
                _id
			}
		}
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			myPalettes {
                _id
			}
			favorites {
                _id
			}
		}
	}
`;

export const QUERY_TAG = gql`
	query tag($name: String!) {
		tag(name: $name) {
			_id
			name
			taggedPalettes{
				_id
			}
		}
	}
`;