import React from 'react';

import Colors from '../../components/Colors';

const Palette = ({palette}) => {

    const {
        title,
        description,
        user,
        createdAt,
        primary,
        secondary,
        accent1,
        accent2,
        accent3,
        likes,
        saves
    } = palette;


    return(
        <>
        <div>
            <h3>{title}</h3>
            <p>by {user} on {createdAt}</p>
            <div>
                <Colors palette={palette}/>
            </div>
            <div>
                <p>
                    <i className="fas fa-heart"></i>{likes}
                    <i className="far fa-bookmark"></i>{saves} 
                    <i className="fas fa-share-square"></i> Share
                </p>
            </div>
            <div>
                <h5>Description:</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
        </>
    )
}

export default Palette;