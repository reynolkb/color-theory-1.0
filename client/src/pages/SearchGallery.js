//libraries
import React, {useState} from 'react';
import Palette from '../components/Palette';
import { useQuery } from '@apollo/react-hooks';
import {Redirect, useParams} from "react-router-dom"
import {QUERY_SEARCH_ALL_PALETTES, QUERY_TAG} from '../utils/queries';

//components
import SearchBar from '../components/SearchBar';

const SearchGallery = () => {
    let palettes = [];

    const {name: tagName} = useParams();
    console.log('search gallery');

    // const [palettes, setPalettes] = useState([]);

    const {loading: loading1, data: data1} = useQuery(QUERY_TAG, {
        variables: {name: tagName}
    });

    const {loading: loading2, data: data2} = useQuery(QUERY_SEARCH_ALL_PALETTES);

    console.log(data1);
    console.log(loading1);
    console.log(tagName);

    const newTaggedPalettesArr = [];

    // once the data has been loaded from the database grab all the palettes with the searched tag
    if(loading1 === false && loading2 === false) {
        const tag = data1?.tag || [];
        const taggedPalettesArr = tag.taggedPalettes;
        for (let i = 0; i < taggedPalettesArr.length; i++) {
            newTaggedPalettesArr.push(tag.taggedPalettes[i]._id);
        }
        console.log(newTaggedPalettesArr);

        const allPalettes = data2?.palettes || [];
        console.log(allPalettes);
        const filteredPalettes = allPalettes.filter(palette => {
            for (let i = 0; i < newTaggedPalettesArr.length; i++) {
                if (palette._id === newTaggedPalettesArr[i]) {
                    return true;
                }
            }

            return false;
        })

        console.log(filteredPalettes);
        palettes = filteredPalettes;
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