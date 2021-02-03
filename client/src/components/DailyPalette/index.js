import React from 'react';
import { Link } from 'react-router-dom';

// components
import SocialButtons from '../SocialButtons';
import Colors from '../Colors';

const DailyPalette = ({ palette }) => {

    // console.log(palette);
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
        <div className='daily-palette'>
            <h4>{title} by {username}</h4>
            <div>
                <Link to={`/details/${palette._id}`}>
                    <Colors palette={palette} />
                </Link>
            </div>
            <SocialButtons upvoteCount={upvoteCount} saveCount={saveCount} paletteId={palette._id}/>
        </div>
    )
}

export default DailyPalette;