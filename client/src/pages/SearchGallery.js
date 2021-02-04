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

    const [currentTagPalettes, setCurrentTagPalettes] = useState([{
        accent1: "#f6f6f6",
        accent2: "#f1f1f1",
        accent3: "#f6f6f6",
        createdAt: "1612328621360",
        description: "Please try another Search word",
        primary: "#f6f6f6",
        saveCount: "50",
        secondary: "#f1f1f1",
        title: "NO RESULTS FOUND",
        upvoteCount: "100",
        username: "ColorTheory",
        _id: "601a2eadf6ed238e402c8bb4",
    }]);

    // use global state
    const state = useSelector(state => state);
    console.log(state);

    // useDispatch method for interacting with global state
    const dispatch = useDispatch();

    // destructure palettes from state
    const { tags } = state;

    // query for tag data
    // const {loading, data} = useQuery(QUERY_TAGS);
    // console.log(data);
   
    // affect state of page
    useEffect(() => {  
        // if data returns
        // if (data) {
        if (tags.length) {

            // filter out the tag that was searched
            // const searchedTag = data.tags.filter(tag => tag.name.toLowerCase() === tagName.toLowerCase());
            const searchedTag = tags.filter(tag => tag.name.toLowerCase() === tagName.toLowerCase());
            console.log(searchedTag.length);
            
            if (searchedTag.length) {
                console.log("Found");
                const palettes = searchedTag[0].taggedPalettes;
                setCurrentTagPalettes(palettes);
            }
            else {
                console.log("Not found");
            }

            // dispatch the tag data to global state
            // dispatch({
            //     type: UPDATE_TAGS,
            //     tags: data.tags
            // });

            // also update IndexedDB with updated tag data
            // data.tags.forEach((tag) => {
            //     idbPromise('tags', 'put', tag)
            // });

        // if no data returns because user is offline, get data from IndexedDb
        } else if (!tags.length) {
            idbPromise('tags', 'get').then((tags) => {
                dispatch({
                    type: UPDATE_TAGS,
                    tags: tags
                });
            });

            console.log("we are offline so pull from idb");
        }

    // }, [data, loading, tagName, dispatch]);
    }, [tagName, tags, dispatch]);

    return (
        <div className='global-wrapper'>
            <div className='sg-page-wrapper'>
                <div className='sg-header'>
                    <div className='searchbar-wrapper'>
                        <SearchBar />
                    </div>
                    <div className='gallery-description'>
                        <p>This is the Color Theory search gallery. Try searching for tags, such as colors, ideas, or feelings, to explore various palettes.</p>
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