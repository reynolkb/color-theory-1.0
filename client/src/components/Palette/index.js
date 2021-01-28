import React from 'react';
import { Link } from 'react-router-dom';
// components
import Colors from '../../components/Colors';
import SocialButtons from '../SocialButtons';

const Palette = ({ palettes }) => {

    return (
        // will need link to by react to link to details page 
        <div>
            {palettes &&
                palettes.map(palette => (
                    <div key={palette._id}>
                        <div className='palette-wrapper'>
                            {/* <Link to={`/palette/${palette._id}`}> */}
                                <h3 className='palette-title'>{palette.title}</h3>
                                <p>by {palette.username} on {palette.createdAt}</p>
                                <div>
                                    <Colors palette={palette} />
                                </div>
                                <SocialButtons upvoteCount={palette.upvoteCount} saveCount={palette.saveCount} />
                                <div>
                                    <h5 className='palette-description'>Description:</h5>
                                    <p>
                                        {palette.description}
                                    </p>
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Palette;