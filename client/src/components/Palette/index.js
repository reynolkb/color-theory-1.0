// libraries
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { dateFormat }  from '../../utils/dateFormat';

// components
import Colors from '../../components/Colors';
import SocialButtons from '../SocialButtons';

// local storage in IndexedDb
import { UPDATE_PALETTES } from '../../utils/actions';
// import helper
import { idbPromise } from '../../utils/helpers';

// const Palette = ({ paletteData }) => {
const Palette = ({ palettesData }) => {

    const [currentFilter, setCurrentFilter] = useState({value: 'recent'});

    const [palettes, setPalette] = useState(palettesData);

    const filterData = event => {

        // console.log(event.target.value);

        setCurrentFilter({value: event.target.value});
        
        // console.log("event was fired");

        if (event.target.value === 'most-liked') {
            // console.log("most liked was clicked");

            // sort the palette data by most upvotes and return in descending order
            let sortedPaletteData = palettes.sort((a, b) => b.upvoteCount - a.upvoteCount);
            // console.log(sortedPaletteData);

            // set the state
            setPalette(sortedPaletteData);

        } else if (event.target.value === 'recent') {
            // console.log("recent was clicked");

            // sort the palette data by createdAt and return in descending order
            let sortedPaletteData = palettes.sort((a, b) => b.createdAt - a.createdAt);
            // console.log(sortedPaletteData);

            // set the state
            setPalette(sortedPaletteData);
        }
    }

    return (

        <>
            <div className='filter-selection'>
                <form>
                    <select className='filter' name='filter' onChange={filterData} value={currentFilter.value}>
                        <option value='most-liked'>Most Liked</option>
                        <option value='recent'>Recent</option>
                    </select>
                </form>
            </div>
            
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
                                    <SocialButtons upvoteCount={palette.upvoteCount} saveCount={palette.saveCount} paletteId={palette._id}/>
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

        </>
    )
}

export default Palette;