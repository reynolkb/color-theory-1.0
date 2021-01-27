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
                title
                description
                primary
                secondary
                accent1
                accent2
                accent3
			}
			favorites {
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
                title
                description
                primary
                secondary
                accent1
                accent2
                accent3
			}
			favorites {
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
	}
`;