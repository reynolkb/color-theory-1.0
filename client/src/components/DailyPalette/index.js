import React from 'react';

// components
import SocialButtons from '../SocialButtons';
import Colors from '../Colors';

import { palette } from '../../const/colors';


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