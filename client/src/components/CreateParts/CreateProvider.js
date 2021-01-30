import React, { useState, createContext } from 'react';
import { useMutation } from '@apollo/react-hooks';

//utility
import { ADD_PALETTE } from '../../utils/mutations';

//initial state for all forms
const formState = {
    title: '',
    description: '',
    primary: '#f6f6f6',
    secondary: '#f1f1f1',
    accent1: '#f6f6f6',
    accent2: '#f1f1f1',
    accent3: '#f6f6f6',
    tags: [],
    current: '#f6f6f6',
    workingColor: 'primary'
};

//these are our intial state for provider
const contextState = {
    state: formState,
    handleChange: () => {},
    handleSubmit: () => {},
    error: null,
    loading: false
}


export const paletteCreatorContext = createContext(contextState);

const CreateProvider = ({ children }) => {

    const [ addPalette, { error }] = useMutation(ADD_PALETTE);
    const [ loading, setLoading ] = useState(false);
    const [ state, setState ] = useState(formState);

    const handleChange = (property) => {
        setState({...state, ...property})
    }

    const handleSubmit =  async () => {
        setLoading(true);
        //this is where we do our api call
        const palette = {
            title: state.title,
            description: state.description,
            primary: state.primary,
            secondary: state.secondary,
            accent1: state.accent1,
            accent2: state.accent2,
            accent3: state.accent3,
            tags: state.tags,
        };
        // console.log(palette);
        try {
            // console.log(mutationResponse);
            const mutationResponse = await addPalette({
                variables: palette,
            })
            if (mutationResponse.data.addPalette) {
                window.location.assign('/');
            } else {
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (
        <paletteCreatorContext.Provider value={{ state, handleChange, handleSubmit, error, loading }}>
            { children }
        </paletteCreatorContext.Provider>
    )
}

export default CreateProvider;