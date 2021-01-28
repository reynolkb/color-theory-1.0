import React from 'react';
import AuthWrapper from '../components/AuthWrapper';

const Login = () => {

    return(
            <AuthWrapper className='pattern-diagonal-stripes-left'>
                <h3 className='auth-title'>Login</h3>
                    <div>
                        <form>
                            <div  className='auth-element'>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' name='email' />
                            </div>
                            <div  className='auth-element'>
                                <label htmlFor='password'>Password:</label>
                                <input type='password' name='password' />
                            </div>
                            <button type='submit' className='btn pink-btn'>Login</button>
                        </form>
                    </div>
            </AuthWrapper>
    )
};

export default Login;