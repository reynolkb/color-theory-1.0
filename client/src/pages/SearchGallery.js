//libraries
import React from 'react';
import Palette from '../components/Palette';

//components
import SearchBar from '../components/SearchBar';

import { palettes } from '../const/colors';

const SearchGallery = () => {
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
                    <Palette key={palettes.title} palettes={ palettes }/>
                </div>
            </div>
        </div>
    )
}

export default SearchGallery;