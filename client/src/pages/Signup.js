import React from 'react';

import AuthWrapper from '../components/AuthWrapper';

const Signup = () => {

    return(
            <AuthWrapper className='pattern-diagonal-stripes-right'>
                <h3 className='auth-title'>Signup</h3>
                    <div>
                        <form>
                            <div className='auth-element'>
                                <label htmlFor='username'>Username:</label>
                                <input type='text' name='username' />
                            </div>
                            <div className='auth-element'>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' name='email' />
                            </div>
                            <div className='auth-element'>
                                <label htmlFor='password'>Password:</label>
                                <input type='password' name='password' />
                            </div>
                            <button type='submit' className='btn blue-btn'>Signup</button>
                        </form>
                    </div>
            </AuthWrapper>
    )
};

export default Signup;