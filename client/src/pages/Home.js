import React from 'react';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
import { QUERY_PALETTES } from '../utils/queries';

// this is Cat's test data
// import { fakePalettes } from '../const/colors'

import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    // load the Home component & execute the query for the Palette data
    // use loading property to:
    // --- indicate that the request isn't done just yet
    // --- conditionally render data based on whether or not there is data to even display
    // data returned from the server stored in the destructured data property
    const { loading, data } = useQuery(QUERY_PALETTES);

    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    const palettes = data?.palettes || [];
    console.log(palettes);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div>
                {
                    fakePalettes.map((palette, i) => (
                        <Palette key={i} palette={palette} />
                    ))
                }
            </div>

            <div>
                <Sidebar />
            </div>
        </main>
    );
};

export default Home;
