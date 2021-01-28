import React from 'react';

// import apollo libraries for using React Hooks functionality with Apollo queries and mutations
import { ApolloProvider } from '@apollo/react-hooks';

// functionality to make requests to the server with helper libraries
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';

import Nav from './components/Nav';
import Footer from './components/Footer';

// establish the connection to the back-end server's /graphql endpoint using apollo
const client = new ApolloClient({
  request: operation => {

    const token = localStorage.getItem('id_token');

    // set the HTTP request headers to include the JWT token

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });

  },
  // /graphql endpoint
  // server path defined as "proxy" in package.json 
  uri: '/graphql'

});

function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
