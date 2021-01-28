import React from 'react';

// this doesn't need any information from the db
const AuthWrapper = ({children, className}) => {

    const border = `${className} auth-panel`

    return(
        <div className='auth-wrapper'>
            <div className={border}>
            {/* this is the div with background color  */}
                <div className='auth-panel-contents'>
                    {children}
                </div>
            </div>
        </div>
    )
};


export default AuthWrapper;