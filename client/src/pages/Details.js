//libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, useParams } from "react-router-dom"

import { QUERY_PALETTE } from '../utils/queries';

//component
import Palette from '../components/Palette';
import Preview from '../pages/Preview';

const Details = () => {

    const { id: paletteId } = useParams();

    const { loading, data } = useQuery(QUERY_PALETTE, {
        variables: { id: paletteId }
    });

    console.log(data);
    console.log(loading);
    console.log(paletteId);

    const palette = data?.palette || [];
    const palettes = [palette];

    return(
        <div className='global-wrapper'>
            {/* left side */}
            <div className='details-palette'>
                <Palette key={ paletteId } palettes={ palettes }/>
                <div className='added-tags'>
                    <h4>Tags</h4>
                    {/* this is a dummy tag */}
                    <div className='tag-pill'>
                        <p>tags here</p>
                    </div>
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