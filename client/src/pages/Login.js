import React, { useState } from 'react';
import AuthWrapper from '../components/AuthWrapper';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
    const [formState, setFormState] = useState({ username: '', password: '' })
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
        const mutationResponse = await login({ variables: { username: formState.username, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        } catch (e) {
        console.log(e)
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value
        });
    };


    return(
            <AuthWrapper className='pattern-diagonal-stripes-left'>
                <h3 className='auth-title'>Login</h3>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div  className='auth-element'>
                                <label htmlFor='username'>Username:</label>
                                <input type='username' name='username' onChange={handleChange} />
                            </div>
                            <div  className='auth-element'>
                                <label htmlFor='password'>Password:</label>
                                <input type='password' name='password' onChange={handleChange}/>
                            </div>
                            {error ? 
                                <div>
                                    <p className="error-text" >The provided credentials are incorrect</p>
                                </div> : null
                            }
                            <button className='btn pink-btn' type="submit">Login</button>
                        </form>
                    </div>
            </AuthWrapper>
    )
};

export default Login;