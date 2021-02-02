// libraries
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, useParams } from "react-router-dom";

// components
import Palette from '../components/Palette';
import SearchBar from '../components/SearchBar';

// queries
import { QUERY_SEARCH_ALL_PALETTES, QUERY_TAGS } from '../utils/queries';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PALETTES, UPDATE_TAGS } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

const SearchGallery = () => {

    // pull tag name from path
    const { name: tagName } = useParams();
    // console.log('we are in the search gallery');
    console.log(tagName);

    // use global store
    const state = useSelector(state => state);
    console.log(state);

    // useDispatch method for interacting with global store
    const dispatch = useDispatch();

    // destructure palettes from state
    const { palettes, tags } = state;
    // const { tags } = state;

    // pull palettes data from indexedDb if global store is empty
    // if (!palettes.length) {
    //     console.log("i am zero");
    //     idbPromise('palettes', 'get').then((palettes) => {
    //         dispatch({
    //             type: UPDATE_PALETTES,
    //             palettes: palettes
    //         });
    //     });
    // }



    // query for tag data
    const {loading, data} = useQuery(QUERY_TAGS);
    console.log(data);
    
    // effect state of page
    useEffect(() => {

        if (tags.length) {
            console.log("tags are populated")
    
            console.log(tags);
        
            const searchedTag = tags.filter(tag => {
                return tag.name === tagName;
            });
    
            console.log(searchedTag);
            console.log(searchedTag[0].taggedPalettes);
            dispatch({ 
                type: UPDATE_PALETTES,
                palettes: searchedTag[0].taggedPalettes
            });
    
        }    

        // if data returns
        if (data) {
        // else if (data) {
            // dispatch the tag data to global store
            dispatch({
                type: UPDATE_TAGS,
                tags: data.tags
            });

            // also update IndexedDB with updated tag data
            data.tags.forEach((tag) => {
                idbPromise('tags', 'put', tag)
            });

            console.log("tags were just updated");

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


    // let palettes = [];



    // // const [palettes, setPalettes] = useState([]);

    // const {loading: loading1, data: data1} = useQuery(QUERY_TAG, {
    //     variables: {name: tagName}
    // });


    // const {loading: loading2, data: data2} = useQuery(QUERY_SEARCH_ALL_PALETTES);

    // console.log(data1);
    // console.log(loading1);
    // console.log(tagName);

    // const newTaggedPalettesArr = [];

    // once the data has been loaded from the database grab all the palettes with the searched tag
    // if(loading1 === false && loading2 === false) {
    //     const tag = data1?.tag || [];
    //     const taggedPalettesArr = tag.taggedPalettes;
    //     for (let i = 0; i < taggedPalettesArr.length; i++) {
    //         newTaggedPalettesArr.push(tag.taggedPalettes[i]._id);
    //     console.log(newTaggedPalettesArr);

    //     const allPalettes = data2?.palettes || [];
    //     console.log(allPalettes);
    //     const filteredPalettes = allPalettes.filter(palette => {
    //         for (let i = 0; i < newTaggedPalettesArr.length; i++) {
    //             if (palette._id === newTaggedPalettesArr[i]) {
    //                 return true;
    //             }
    //         }

    //         return false;
    //     })

    //     console.log(filteredPalettes);
    //     palettes = filteredPalettes;
    // }

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
                    <Palette palettes={palettes} />
                </div>
            </div>
        </div>
    )
}

export default SearchGallery;