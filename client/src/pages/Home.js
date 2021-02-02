import React, { useEffect, useState } from 'react';

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
import Filter from '../components/Filter';

const Home = () => {

    // load the Home component & execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    // query for main content
    // const { loading, data } = useQuery(QUERY_PALETTES);
    // console.log(data);

    // get Palette data out of the query's response with optional chaining
    // if data exists, store it in the palette constant we just created
    // if data is undefined, save empty array 
    // constant for main content
    // const palettes = data?.palettes || [];
    // console.log(palettes);

    // palettes.length && console.log(typeof palettes[0]._id);

    const state = useSelector(state => state);
    // console.log("Below is the current Global State:");
    // console.log(state);
    const dispatch = useDispatch();

    const { palettes } = state;
    // console.log(filter);
    // console.log(filter[0].value);

    const { loading, data } = useQuery(QUERY_PALETTES);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PALETTES,
                palettes: data.palettes
            });

            data.palettes.forEach((palette) => {
                idbPromise('palettes', 'put', palette);
            });

        } else if (!loading) {
            idbPromise('palettes', 'get').then((palettes) => {
                dispatch({
                    type: UPDATE_PALETTES,
                    palettes: palettes
                });
            });
        }
    }, [data, loading, dispatch]);

    return (

        <div className='global-wrapper'>
            <div className='home-palette-wrapper'>
                <Filter />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                        /* // Once query is complete and loading is undefined, pass palettes array to <Palette> component as props */
                        // <Palette palettes={palettes} />
                        <Palette />
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