// libraries
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { dateFormat } from '../../utils/dateFormat';

// components
import Colors from '../../components/Colors';
import SocialButtons from '../SocialButtons';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
// local storage in IndexedDb
import { UPDATE_PALETTES } from '../../utils/actions';
// import helper
import { idbPromise } from '../../utils/helpers';

// const Palette = ({ paletteData }) => {
const Palette = ({ palettes }) => {

    const state = useSelector(state => state);
    // console.log("Below is the current Global State:");
    // console.log(state);
    const dispatch = useDispatch();

    const { filter } = state;
    // console.log(filter[0]);
    // console.log(filter[0].value);

    // function filterData() {

        // if (filter[0].value === 'most-liked') {
        //     console.log("most liked");
    
        //     // sort the palette data by most upvotes and return in descending order
        //     // let sortedPaletteData = palettes.sort((a, b) => b.upvoteCount - a.upvoteCount);
        //     // console.log(sortedPaletteData);
    
        //     // set the state
        //     // setPalette(sortedPaletteData);
    
        // } else if (filter[0].value === 'recent') {
        //     console.log("recent");
    
        //     // sort the palette data by createdAt and return in descending order
        //     // let sortedPaletteData = palettes.sort((a, b) => b.createdAt - a.createdAt);
        //     // console.log(sortedPaletteData);
    
        //     // set the state
        //     // setPalette(sortedPaletteData);
        // }
    
    // }
    console.log('i am the', palettes);

    return (
        <div>
            {palettes &&
                palettes.map(palette => (
                    <div key={palette._id}>
                        <div className='palette-wrapper'>
                            <h3 className='palette-title'>{palette.title}</h3>
                            <p>by {palette.username} on {dateFormat(palette.createdAt)}</p>
                            <div>
                                {/* to palette details page */}
                                <Link to={`/details/${palette._id}`}>
                                    <Colors palette={palette} />
                                </Link>
                            </div>
                            <SocialButtons upvoteCount={palette.upvoteCount} saveCount={palette.saveCount} paletteId={palette._id} />
                            <div>
                                <h5 className='palette-description'>Description:</h5>
                                <p>
                                    {palette.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Palette;