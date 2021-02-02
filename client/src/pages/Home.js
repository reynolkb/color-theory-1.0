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

    // use global store
    const state = useSelector(state => state);

    // useDispatch method for interacting with global store
    const dispatch = useDispatch();

    // destructure palettes and currentfilter from state
    const { palettes, currentfilter } = state;

    // execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    const { loading, data } = useQuery(QUERY_PALETTES);

    // wait for useQuery to execute and receive data
    // put data into store
    // or get data from the store
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

    // handle filter of palette data for 'most-liked' or 'recent'
    function filterPalettes() {

        if (currentfilter === 'most-liked') {

            return palettes.sort((a, b) => b.upvoteCount - a.upvoteCount);
    
        } else if (currentfilter === 'recent') {

            return palettes.sort((a, b) => b.createdAt - a.createdAt);
        }
    
    }

    return (
        <div className='global-wrapper'>
            <div className='home-palette-wrapper'>
                <Filter />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                        /* // Once query is complete and loading is undefined, pass palettes array to <Palette> component as props */
                        <Palette palettes={filterPalettes()} />
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