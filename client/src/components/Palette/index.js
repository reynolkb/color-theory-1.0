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

const Palette = () => {
// const Palette = ({ palettes }) => {

    const state = useSelector(state => state);
    // console.log("Below is the current Global State:");
    // console.log(state);
    const dispatch = useDispatch();

    const { palettes, currentfilter } = state;
    // // console.log(filter);
    // // console.log(filter[0].value);

    // const { loading, data } = useQuery(QUERY_PALETTES);

    // useEffect(() => {
    //     if (data) {
    //         dispatch({
    //             type: UPDATE_PALETTES,
    //             palettes: data.palettes
    //         });

    //         data.palettes.forEach((palette) => {
    //             idbPromise('palettes', 'put', palette);
    //         });

    //     } else if (!loading) {
    //         idbPromise('palettes', 'get').then((products) => {
    //             dispatch({
    //                 type: UPDATE_PALETTES,
    //                 palettes: palettes
    //             });
    //         });
    //     }
    // }, [data, loading, dispatch]);


    function filterPalettes() {

        if (currentfilter === 'most-liked') {
            // console.log("most liked");
    
            // sort the palette data by most upvotes and return in descending order
            // let sortMostLiked = palettes.sort((a, b) => b.upvoteCount - a.upvoteCount);
            // console.log("These are the most liked");
            // console.log(sortMostLiked);
    
            // set the state
            // setPalette(sortedPaletteData);
            // console.log("Most Liked conditional");
            // console.log(state.palettes);

            return state.palettes.sort((a, b) => b.upvoteCount - a.upvoteCount);


    
        } else if (currentfilter === 'recent') {
            // console.log("recent");
    
            // sort the palette data by createdAt and return in descending order
            // let sortedPaletteData = palettes.sort((a, b) => b.createdAt - a.createdAt);
            // console.log(sortedPaletteData);
    
            // set the state
            // setPalette(sortedPaletteData);
            // console.log("Recent conditional");
            // console.log(state.palettes);
            return state.palettes.sort((a, b) => b.createdAt - a.createdAt);
        }
    
    }

    return (
        <div>
            {palettes &&
                // palettes.map(palette => (
                filterPalettes().map(palette => (
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