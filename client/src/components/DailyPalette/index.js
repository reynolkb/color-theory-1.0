import React from 'react';

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
            <div className='likes-shares'>
                <div>
                    <i className="fas fa-heart"></i>{likes}
                    <i className="far fa-bookmark"></i>{saves} 
                </div>
                <div>
                    <i className="fas fa-share-square"></i> Share
                </div>
            </div>
        </div>
    )
}

export default DailyPalette;