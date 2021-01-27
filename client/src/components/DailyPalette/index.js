import React from 'react';

import Colors from '../Colors';

import { palette } from '../../const/colors';

// components
import SocialButtons from '../SocialButtons';

const DailyPalette = () => {

    const {
        user,
        title,
        likes,
        saves,
    } = palette;

    return(
        <div className='daily-palette'>
            <h4>{title}by {user}</h4>
            <div>
                <Colors palette={palette}/>
            </div>
            <SocialButtons likes={likes} saves={saves} />
        </div>
    )
}

export default DailyPalette;