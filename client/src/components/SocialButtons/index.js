import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_UPVOTE } from '../utils/mutations';

const SocialButtons = ({ upvoteCount, saveCount }) => {
    const [addUpvote] = useMutation(ADD_UPVOTE);
    
    // const upvoteClick = () => {
    //     try {

    //     }
    // };

    return(
        <div className='likes-shares'>
        <div>
            <i className="fas fa-heart" onClick={() =>
                upvoteClick()
            }></i>{upvoteCount}
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