import React from 'react';

const Colors = ({palette}) => {

    return(
        <div className='color-wrapper'>
            <div style={{ backgroundColor: palette.primary }}></div>
            <div style={{ backgroundColor: palette.secondary }}></div>
            <div style={{ backgroundColor: palette.accent1 }}></div>
            <div style={{ backgroundColor: palette.accent2 }}></div>
            <div style={{ backgroundColor: palette.accent3 }}></div>
        </div>
    )
};

export default Colors;