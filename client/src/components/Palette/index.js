//libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat }  from '../../utils/dateFormat';

//components
import Colors from '../../components/Colors';
import { palette } from '../../const/colors';
import SocialButtons from '../SocialButtons';

const Palette = ({ palettes }) => {
    console.log(palettes);
    // console.log(palettes[21].tags[0].name);

    return (
        // will need link to by react to link to details page 
        <div>
            {palettes &&
                palettes.map(palette => (
                    <div key={palette._id}>
                        <div className='palette-wrapper'>
                                <h3 className='palette-title'>{palette.title}</h3>
                                <p>by {palette.username} on {dateFormat(palette.createdAt)}</p>
                                <div>
                                    {/* to palette details page */}
                                    <Link to={`/details/${palette._id}`}>
                                        <Colors palette={palette} />
                                    </Link>
                                </div>
                                <SocialButtons upvoteCount={palette.upvoteCount} saveCount={palette.saveCount} paletteId={palette._id}/>
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