import React, { useContext } from 'react';

import { paletteCreatorContext } from '../CreateProvider';


const CreateButton = () => {
    const { handleSubmit, loading } = useContext(paletteCreatorContext);
    return (
        <button 
            className='btn'
            onClick={handleSubmit}
            disabled={loading}
        >
            { loading ? 'Loading' : 'Create' }
        </button>
    )
}

export default CreateButton;

