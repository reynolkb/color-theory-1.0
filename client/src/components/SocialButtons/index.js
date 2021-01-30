import React from 'react';

const SocialButtons = ({ upvoteCount, saveCount }) => {

    return(
        <div className='likes-shares'>
        <div>
            <i className="fas fa-heart"></i>{upvoteCount}
            <i className="far fa-bookmark"></i>{saveCount} 
        </div>
        <div>
        <a href="http://www.facebook.com/sharer.php?u=https://color-theory.herokuapp.com/"
            target="_blank"><i className="fas fa-share-square"></i></a> Share
        </div>
    </div>
    )
}

export default SocialButtons;