import React, {useState} from 'react';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
// import { QUERY_FILTERED_PALETTES } from '../utils/queries';
import { QUERY_PALETTES } from '../utils/queries';

import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    // load the Home component & execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    // query for main content
    // const { loading, data } = useQuery(QUERY_FILTERED_PALETTES);
    const { loading, data } = useQuery(QUERY_PALETTES);

    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    // constant for main content
    const palettes = data?.palettes || [];
    // const palettes = fakePalettes;

    // palettes.length && console.log(typeof palettes[0]._id);

    return (
            <div className='global-wrapper'>
                <div className='home-palette-wrapper'>
                    <div className='filter-selection'>
                        <form>
                            <select className='filter' name='filter'>
                                <option value=''>Filter</option>
                                <option value='most-liked'>Most Liked</option>
                                <option value='recent'>Recent</option>
                            </select>
                        </form>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                            /* // Once query is complete and loading is undefined, pass palettes array to <Palette> component as props */
                            <Palette palettes={palettes}/>
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
