import React from 'react';

// components
import SocialButtons from '../SocialButtons';
import Colors from '../Colors';

// import { palette } from '../../const/colors';

const WeeklyPalette = ({ palette }) => {
    if (!palette) {
        return null;
    }

    const {
        username,
        title,
        upvoteCount,
        saveCount
    } = palette;

    return (
        <div className='weekly-palette'>
            <h4>{title} by {username}</h4>
            <div>
                <Colors palette={palette} />
            </div>
            <SocialButtons upvoteCount={upvoteCount} saveCount={saveCount} paletteId={palette._id}/>
        </div>
    )
}

export default WeeklyPalette;