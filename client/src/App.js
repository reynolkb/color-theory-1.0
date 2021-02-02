import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import apollo libraries for using React Hooks functionality with Apollo queries and mutations
import { ApolloProvider } from '@apollo/react-hooks';
// functionality to make requests to the server with helper libraries
import ApolloClient from 'apollo-boost';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Create from './pages/Create';
import SearchGallery from './pages/SearchGallery';
import Details from './pages/Details';
import Donation from './pages/Donation';

// Global State using Redux
import { Provider } from 'react-redux';
import store from './utils/store';

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
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/search' component={SearchGallery} />
            <Route exact path='/details/:id' component={Details} />
            <Route exact path='/donation' component={Donation} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
