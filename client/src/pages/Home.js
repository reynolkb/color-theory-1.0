import React, { useEffect } from 'react';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PALETTES } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
import { QUERY_PALETTES } from '../utils/queries';

// import Menu from '../components/Menu';
import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';

const Home = () => {

    // create Global state
    const state = useSelector(state => state);
    console.log(state);
    const dispatch = useDispatch();

    // destructure from global state object
    // const { palettes } = state;
    // console.log(palettes);

    // load the Home component & execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    // query for main content
    // const { loading, data } = useQuery(QUERY_PALETTES);
    // console.log(data);
    const { loading, data: dbPaletteData } = useQuery(QUERY_PALETTES);
    console.log(dbPaletteData);

    useEffect(() => {
        // if dbPaletteData exists or has changed, run dispatch to update Global State
        if (dbPaletteData) {
            dispatch({
                type: UPDATE_PALETTES,
                palettes: dbPaletteData.palettes
            });
            console.log("data received");

            // put the data into the palettes store
            dbPaletteData.palettes.forEach(palette => {
                idbPromise('palettes', 'put', palette);
                console.log("data delivered");
            });

        } else if (!loading) {
            // get the data from IndexedDb
            idbPromise('palettes', 'get').then(palettes => {
                dispatch({
                    type: UPDATE_PALETTES,
                    palettes: palettes
                });
            });
            console.log("i got data from indexedDb");
        }
    }, [dbPaletteData, loading, dispatch]);

    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    // constant for main content
    // const palettes = data?.palettes || [];
    // console.log(palettes);

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