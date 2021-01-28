import React from 'react';

const Colors = ({palette}) => {

    return(
        <div className='color-wrapper'>
            <div className='color-wrapper-aspect-ratio'>
                <div style={{ backgroundColor: palette.primary, flexGrow: '2.5' }}></div>
                <div style={{ backgroundColor: palette.secondary, flexGrow: '2' }}></div>
                <div style={{ backgroundColor: palette.accent1 }}></div>
                <div style={{ backgroundColor: palette.accent2 }}></div>
                <div style={{ backgroundColor: palette.accent3 }}></div>
            </div>
        </div>
    )
};

export default Colors;