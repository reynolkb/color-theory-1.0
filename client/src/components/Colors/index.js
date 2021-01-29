import React from 'react';

// import { Link } from 'react-router-dom';

const Colors = ({ palette }) => {

    return (
        <div className='color-wrapper'>
            {/* <Link to={`/palette/${palette._id}`}> */}
                <div className='color-wrapper-aspect-ratio'>
                    <div style={{ backgroundColor: palette.primary, flexGrow: '2.5' }}></div>
                    <div style={{ backgroundColor: palette.secondary, flexGrow: '2' }}></div>
                    <div style={{ backgroundColor: palette.accent1 }}></div>
                    <div style={{ backgroundColor: palette.accent2 }}></div>
                    <div style={{ backgroundColor: palette.accent3 }}></div>
                </div>
            {/* </Link> */}
        </div>
    )
};

export default Colors;