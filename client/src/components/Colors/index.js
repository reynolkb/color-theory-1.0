import React from 'react';

const Colors = ({palette}) => {

    return(
        <>
            <div style={{ backgroundColor: palette.primary }}>Primary</div>
            <div style={{ backgroundColor: palette.secondary }}>Secondary</div>
            <div style={{ backgroundColor: palette.accent1 }}>Accenting 1</div>
            <div style={{ backgroundColor: palette.accent2 }}>Accenting 2</div>
            <div style={{ backgroundColor: palette.accent3 }}>Accenting 3</div>
        </>
    )
};

export default Colors;