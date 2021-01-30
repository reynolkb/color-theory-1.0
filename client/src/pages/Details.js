//libraries
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, useParams } from "react-router-dom"

import { QUERY_PALETTE } from '../utils/queries';

//component
import Palette from '../components/Palette';

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
            <div>
                <Palette key={ paletteId } palettes={ palettes }/>
            </div>
        </div>
    )
}

export default Details;