import React from 'react';

const SocialButtons = ({ upvoteCount, saveCount }) => {

    return(
        <div className='likes-shares'>
        <div>
            <i className="fas fa-heart"></i>{upvoteCount}
            <i className="far fa-bookmark"></i>{saveCount} 
        </div>
        <div>
            <i className="fas fa-share-square"></i> Share
        </div>
    </div>
    )
}

export default SocialButtons;