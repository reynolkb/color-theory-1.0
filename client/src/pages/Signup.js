import React, {useState} from 'react';
import AuthWrapper from '../components/AuthWrapper';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
        variables: {
            username: formState.username, email: formState.email, password: formState.password
        }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value
        });
    };

    return(
            <AuthWrapper className='pattern-diagonal-stripes-right'>
                <h3 className='auth-title'>Signup</h3>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div className='auth-element'>
                                <label htmlFor='username'>Username:</label>
                                <input type='text' name='username' onChange={handleChange}/>
                            </div>
                            <div className='auth-element'>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' name='email' onChange={handleChange}/>
                            </div>
                            <div className='auth-element'>
                                <label htmlFor='password'>Password:</label>
                                <input type='password' name='password' onChange={handleChange}/>
                            </div>
                            {error ? 
                                <div>
                                    <p className="error-text" >The provided credentials are incorrect</p>
                                </div> : null
                            }
                            <button className='btn blue-btn' type="submit">Signup</button>
                        </form>
                    </div>
            </AuthWrapper>

    )
};

export default Signup;