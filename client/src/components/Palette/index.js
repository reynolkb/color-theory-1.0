import React from 'react';

import Colors from '../../components/Colors';

const Palette = ({palette}) => {

    const {
        title,
        description,
        user,
        createdAt,
        likes,
        saves
    } = palette;


    return(
        // will need link to by react to link to details page 
        <>
        <div className='palette-wrapper'>
            <h3 className='palette-title'>{title}</h3>
            <p>by {user} on {createdAt}</p>
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
            <div>
                <h5 className='palette-description'>Description:</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
        </>
    )
}

export default Palette;