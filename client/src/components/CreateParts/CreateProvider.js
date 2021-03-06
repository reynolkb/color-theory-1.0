import React, { useState, createContext } from 'react';
import { useMutation } from '@apollo/react-hooks';

//utility
import { ADD_PALETTE, CREATE_TAG, LINK_TAG_TO_PALETTE } from '../../utils/mutations';

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
    ifNew: [],  
    current: '#f6f6f6',
    workingColor: 'primary'
};

//these are our states for provider
const contextState = {
    state: formState,
    handleChange: () => {},
    handleSubmit: () => {},
    error: null,
    tagError: null,
    linkError: null,
    loading: false
}

export const paletteCreatorContext = createContext(contextState);

const CreateProvider = ({ children }) => {

    const [ addPalette, { error }] = useMutation(ADD_PALETTE);
    const [ createTag, { tagError }] = useMutation(CREATE_TAG);
    const [ linkTagToPal, { linkError }] = useMutation(LINK_TAG_TO_PALETTE);
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
        };
        const tagCount = state.tags.length;
        const tagArray = [];
        const ifNewTagArr = [];
        // reassigning for easier calls
        for (let i = 0; i < tagCount; i++){
            tagArray.push(state.tags[i]);
            ifNewTagArr.push(state.ifNew[i]);
        }
        // creating new palette from user inputs
        try {
            const mutationResponse = await addPalette({
                variables: palette,
            });
            // grab palette ID for linking tag with palette
            const newPaletteId = mutationResponse.data.addPalette._id;
            let newTagId;
            // goes thru all tags inputed (if applicable)
            for(let j =0; j < tagCount; j++){
                // checks to see if tag already exist
                if (tagArray[j] !== ifNewTagArr[j]){
                    console.log(tagArray[j]+' already exist');
                    newTagId = ifNewTagArr[j];
                }
                else {
                    // if tag does not exist create new tag
                    try{
                        const tagMutationResponse = await createTag({
                            variables: {name: tagArray[j]}
                        });
                        // grab tag id for linking with palette
                        newTagId = tagMutationResponse.data.createTag._id;
                        if (!tagMutationResponse.data.createTag){
                            setLoading(false);
                        }
                    }
                    catch (e) {
                        console.log(e);
                        setLoading(false);
                    }
                }
                // linking new or existing tag with new palette
                try {
                    const linkMutationResponse = await linkTagToPal({
                        variables: {paletteId: newPaletteId, tagId: newTagId}
                    });
                    if (!linkMutationResponse.data.linkTagToPal){
                        setLoading(false);
                    }
                }
                catch (e) {
                    console.log(e);
                    setLoading(false);
                }
            }
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
        <paletteCreatorContext.Provider value={{ state, handleChange, handleSubmit, error, tagError, linkError, loading }}>
            { children }
        </paletteCreatorContext.Provider>
    )
}

export default CreateProvider;