import React from 'react';

// components
import Colors from '../../components/Colors';
import SocialButtons from '../SocialButtons';

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
            <SocialButtons likes={likes} saves={saves} />
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