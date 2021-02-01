//libraries
import React from 'react';
import Palette from '../components/Palette';
import { useQuery } from '@apollo/react-hooks';
import {Redirect, useParams} from "react-router-dom"
import {QUERY_TAG} from '../utils/queries';

//components
import SearchBar from '../components/SearchBar';

import { palettes } from '../const/colors';

const SearchGallery = () => {
    const {name: tagName} = useParams();

    const {loading, data} = useQuery(QUERY_TAG, {
        variables: {name: tagName}
    });

    console.log(data);
    console.log(loading);
    console.log(tagName);

    const tag = data?.tag || [];
    
    console.log(tag.taggedPalettes);

    const taggedPalettesArr = tag.taggedPalettes;
    console.log(Array.isArray(taggedPalettesArr));
    const newTaggedPalettesArr = [];
    // for (let i = 0; i < tag.taggedPalettes.length; i++) {
    //     newTaggedPalettesArr.push(tag.taggedPalettes[i]._id);
    // }
    console.log(newTaggedPalettesArr);

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