import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

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

export const ADD_PALETTE = gql`
	mutation addPalette(
        $description: String!
        $primary: String!
        $secondary: String!
        $accent1: String!
        $accent2: String!
        $accent3: String!
        ) {
            addPalette(
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