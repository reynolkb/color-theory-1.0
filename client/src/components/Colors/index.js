import React from 'react';

const Colors = ({colors}) => {

    return(
        <>
            <div style={{ backgroundColor: colors.primary }}>Primary</div>
            <div style={{ backgroundColor: colors.secondary }}>Secondary</div>
            <div style={{ backgroundColor: colors.accent1 }}>Accenting 1</div>
            <div style={{ backgroundColor: colors.accent2 }}>Accenting 2</div>
            <div style={{ backgroundColor: colors.accent3 }}>Accenting 3</div>
        </>
    )
};

export default Colors;