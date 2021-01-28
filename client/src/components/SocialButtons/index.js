import React from 'react';

const SocialButtons = ({likes, saves}) => {

    return(
        <div className='likes-shares'>
        <div>
            <i className="fas fa-heart"></i>{likes}
            <i className="far fa-bookmark"></i>{saves} 
        </div>
        <div>
            <i className="fas fa-share-square"></i> Share
        </div>
    </div>
    )
}

export default SocialButtons;