//libraries
import React from 'react';
import Palette from '../components/Palette';
import { useQuery } from '@apollo/react-hooks';
import {Redirect, useParams} from "react-router-dom"
import {QUERY_PALETTE, QUERY_TAG} from '../utils/queries';

//components
import SearchBar from '../components/SearchBar';

import { palettes } from '../const/colors';

const SearchGallery = () => {
    const {name: tagName} = useParams();
    console.log('search gallery');

    const {loading, data} = useQuery(QUERY_TAG, {
        variables: {name: tagName}
    });

    console.log(data);
    console.log(loading);
    console.log(tagName);

    const newTaggedPalettesArr = [];

    // once the data has been loaded from the database grab all the palettes with the searched tag
    if(loading === false) {
        const tag = data?.tag || [];
        const taggedPalettesArr = tag.taggedPalettes;
        for (let i = 0; i < taggedPalettesArr.length; i++) {
            newTaggedPalettesArr.push(tag.taggedPalettes[i]._id);
        }
        console.log(newTaggedPalettesArr);
    }

    return(
        <div className='global-wrapper'>
            <div className='sg-page-wrapper'>
                <div className='sg-header'>
                    <SearchBar />
                    <div className='gallery-description'>
                        <p>Some words</p>
                    </div>
                </div>

                <div className='gallery-palettes'>
                    <Palette palettes={ palettes }/>
                </div>
            </div>
        </div>
    )
}

export default SearchGallery;