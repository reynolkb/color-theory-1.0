//libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom"

import { QUERY_PALETTE } from '../utils/queries';

//component
import Palette from '../components/Palette';
import Preview from '../pages/Preview';

const Details = () => {

    const { id: paletteId } = useParams();

    const { loading, data } = useQuery(QUERY_PALETTE, {
        variables: { id: paletteId }
    });

    const palette = data?.palette || [];
    const palettes = [palette];

    if (loading) {
        return (
            <div className='global-wrapper'>Loading...</div>
        )
    }

    // add tag names to array for displaying
    let displayTags = [];
    for(let j = 0; j < palette.tags.length; j++){
        displayTags.push(palette.tags[j].name);
    }

    return(
        <div className='global-wrapper'>
            {/* left side */}
            <div className='details-palette'>
                <Palette key={ paletteId } palettes={ palettes }/>
                   <div className='added-tags'>
                    <h4>Tags</h4>
                    {
                    displayTags.map((tag, i) => (
                        <div key={`${tag}${i}`} className='tag-pill'>
                            <p>{tag}</p>
                        </div>
                    ))
                    }

                </div>
            </div>
            {/* right side */}
            <div className='details-preview'>
                <Preview palette={ palette } />
            </div>
        </div>
    )
}

export default Details;