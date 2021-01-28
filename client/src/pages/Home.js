import React from 'react';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
import { QUERY_PALETTES } from '../utils/queries';

// this is Cat's test data
import { fakePalettes } from '../const/colors'

import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    // load the Home component & execute the query for the Palette data
    // use loading property to:
    // --- indicate that the request isn't done just yet
    // --- conditionally render data based on whether or not there is data to even display
    // data returned from the server stored in the destructured data property
    // query for main content
    // const { loading, data } = useQuery(QUERY_FILTERED_PALETTES);
    // query for sidebar content - trending today
    // const { loading, data: dailyData } = useQuery(QUERY_DAILY_PALETTE);
    // query for sidebar content - trending this week
    // const { loading, data: weeklyData } = useQuery(QUERY_WEEKLY_PALETTE);

    
    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    // constant for main content
    // const palettes = data?.palettes || [];
    // constant for sidebar content - trending today
    // const dailyPalettes = data?.palettes || [];
    // constant for sidebar content - trending this week
    // const weeklyPalettes = data?.palettes || [];
    const palettes = fakePalettes;
    // console.log(palettes);


    return (
        <main>
            <div className='global-wrapper'>
                <div className='home-palette-wrapper'>
                    {/* cat's styling palettes */}
                    {/* {
                        fakePalettes.map((palette, i) => (
                            <Palette key={i} palette={palette} />
                        ))
                    } */}

                    {/* {loading ? (
                        <div>Loading...</div>
                    ) : ( */}
                            {/* // Once query is complete and loading is undefined, pass palettes array to <PaletteList> component as props */}
                            <Palette palettes={palettes} />
                        {/* )} */}
                </div>

                <div className='sidebar-wrapper'>
                    <Sidebar />
                </div>
            </div>
        </main>
    );
};

export default Home;
