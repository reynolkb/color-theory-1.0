import React from 'react';

const Login = () => {

    return(
        <div className='auth-wrapper'>
            <div>
            {/* this is the div with background color  */}
                <div>
                    <h3>Login</h3>
                    <div>
                        <div>
                            <form>
                                <div>
                                    <label htmlFor='email'>Email:</label>
                                    <input type='email' name='email' />
                                </div>
                                <div>
                                    <label htmlFor='password'>Password:</label>
                                    <input type='password' name='password' />
                                </div>
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
};

export default Login;