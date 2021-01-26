import React from 'react';

import Colors from '../../components/Colors';

const Palette = ({palette}) => {

    const {
        title,
        description,
        user,
        createdAt,
        colors,
        likes,
        saves
    } = palette;

    return(
        <>
        <div>
            <h3>{title}</h3>
            <p>by {user} on {createdAt}</p>
            <div>
                <Colors colors={colors}/>
            </div>
            <div>
                Likes{likes} Saves{saves} Share
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