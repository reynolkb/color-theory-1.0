import React from 'react';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
import { QUERY_PALETTES } from '../utils/queries';

// import Menu from '../components/Menu';
import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    // load the Home component & execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    // query for main content
    const { loading, data } = useQuery(QUERY_PALETTES);

    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    // constant for main content
    const palettes = data?.palettes || [];

    // palettes.length && console.log(typeof palettes[0]._id);

    return (

        <div className='global-wrapper'>
            <div className='home-palette-wrapper'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                        /* // Once query is complete and loading is undefined, pass palettes array to <Palette> component as props */
                        <Palette palettesData={palettes} />
                )}
            </div>

            <div className='sidebar-wrapper'>
            {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Sidebar palettes={palettes} />
                )}
            </div>
        </div>
    );
};

export default Home;