// libraries
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom";

// components
import Palette from '../components/Palette';
import SearchBar from '../components/SearchBar';

// queries
import { QUERY_TAGS } from '../utils/queries';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_TAGS } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

const SearchGallery = () => {

    // pull tag name from path
    const { name: tagName } = useParams();

    const [currentTagPalettes, setCurrentTagPalettes] = useState([]);

    // use global store
    const state = useSelector(state => state);
    console.log(state);

    // useDispatch method for interacting with global store
    const dispatch = useDispatch();

    // destructure palettes from state
    const { tags } = state;

    // query for tag data
    const {loading, data} = useQuery(QUERY_TAGS);
   
    // affect state of page
    useEffect(() => {  

        // if data returns
        if (data) {

            // filter out the tag that was searched
            const searchedTag = data.tags.filter(tag => tag.name === tagName);
            const palettes = searchedTag[0].taggedPalettes;
            setCurrentTagPalettes(palettes);

            // dispatch the tag data to global store
            dispatch({
                type: UPDATE_TAGS,
                tags: data.tags
            });

            // also update IndexedDB with updated tag data
            data.tags.forEach((tag) => {
                idbPromise('tags', 'put', tag)
            });

        // if no data returns because user is offline, get data from IndexedDb
        } else if (!loading) {
            idbPromise('tags', 'get').then((tags) => {
                dispatch({
                    type: UPDATE_TAGS,
                    tags: tags
                });
            });

            console.log("we are offline so pull from idb");
        }

    }, [data, loading, dispatch]);

    return (
        <div className='global-wrapper'>
            <div className='sg-page-wrapper'>
                <div className='sg-header'>
                    <SearchBar />
                    <div className='gallery-description'>
                        <p>Some words</p>
                    </div>
                </div>

                <div className='gallery-palettes'>
                    <Palette palettes={currentTagPalettes} />
                </div>
            </div>
        </div>
    )
};

export default SearchGallery;