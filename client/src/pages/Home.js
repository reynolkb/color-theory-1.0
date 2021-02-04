import React, { useEffect } from 'react';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PALETTES, UPDATE_TAGS } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

// import functionality to make requests to GraphQL server 
import { useQuery } from '@apollo/react-hooks';

// import queries 
import { QUERY_PALETTES, QUERY_TAGS } from '../utils/queries';

// import Menu from '../components/Menu';
import Palette from '../components/Palette';
import Sidebar from '../components/Sidebar';
import Filter from '../components/Filter';

const Home = () => {

    // use global store
    const state = useSelector(state => state);
    console.log(state);

    // useDispatch method for interacting with global store
    const dispatch = useDispatch();

    // destructure palettes and currentfilter from state
    const { palettes, currentfilter } = state;

    // execute the query for the Palette data
    // data returned from the server stored in the destructured data property
    const { loading: paletteLoading, data: paletteData } = useQuery(QUERY_PALETTES);

    // query for tags data to add to global state and indexedDB
    const { loading: tagLoading, data: tagData } = useQuery(QUERY_TAGS);
    
    // wait for useQuery to execute and receive data
    // put data into store
    // or get data from the store
    useEffect(() => {
        if (paletteData) {
            dispatch({
                type: UPDATE_PALETTES,
                palettes: paletteData.palettes
            });

            paletteData.palettes.forEach((palette) => {
                idbPromise('palettes', 'put', palette);
            });

        } else if (!paletteLoading) {
            idbPromise('palettes', 'get').then((palettes) => {
                dispatch({
                    type: UPDATE_PALETTES,
                    palettes: palettes
                });
            });
        }

        if (tagData) {
            dispatch({
                type: UPDATE_TAGS,
                tags: tagData.tags
            });

            tagData.tags.forEach((tag) => {
                idbPromise('tags', 'put', tag)
            });

        } else if (!tagLoading) {
            idbPromise('tags', 'get').then((tags) => {
                dispatch({
                    type: UPDATE_TAGS,
                    tags: tags
                });
            });
        }

    }, [paletteData, paletteLoading, tagData, tagLoading, dispatch]);

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
            <div className='home-page-wrapper'>
                <div className='home-palette-wrapper'>
                    <Filter />
                    {paletteLoading ? (
                        <div>Loading...</div>
                    ) : (
                            /* // Once query is complete and loading is undefined, pass palettes array to <Palette> component as props */
                            <Palette palettes={filterPalettes()} />
                        )}
                </div>

                <div className='sidebar-wrapper'>
                    {paletteLoading ? (
                        <div>Loading...</div>
                    ) : (
                            <Sidebar />
                            // <Sidebar palettes={palettes} />
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home;