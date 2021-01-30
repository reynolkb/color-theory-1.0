import React, { useContext } from 'react';

import { paletteCreatorContext } from '../CreateProvider';


const CreateButton = () => {
    const { handleSubmit, loading, error } = useContext(paletteCreatorContext);
    return (
        <div className='error-header'>
            { error ? <p className='error-text'>Must complete all fields.</p> : null }
            <button 
                className='btn'
                onClick={handleSubmit}
                disabled={loading}
            >
                { loading ? 'Loading' : 'Create' }
            </button>
        </div>
    )
}

export default CreateButton;

