// libraries
import React from 'react';

import { Link } from 'react-router-dom';
import { dateFormat } from '../../utils/dateFormat';

// components
import Colors from '../../components/Colors';
import SocialButtons from '../SocialButtons';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';

const Palette = ({ palettes }) => {

    return (
        <div>
            {palettes &&
                palettes.map(palette => (
                // filterPalettes().map(palette => (
                    <div key={palette._id}>
                        <div className='palette-wrapper'>
                            <h3 className='palette-title'>{palette.title}</h3>
                            <p>by <Link to={`/user/${palette.username}`}>{palette.username}</Link> on {dateFormat(palette.createdAt)}</p>
                            <div>
                                {/* to palette details page */}
                                <Link to={`/details/${palette._id}`}>
                                    <Colors palette={palette} />
                                </Link>
                            </div>
                            <SocialButtons upvoteCount={palette.upvoteCount} saveCount={palette.saveCount} paletteId={palette._id} />
                            <div>
                                <h5 className='palette-description'>Description:</h5>
                                <p>
                                    {palette.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Palette;