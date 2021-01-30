import React, { useContext } from 'react';
import { paletteCreatorContext } from '../CreateProvider';

const PaletteDescription = () => {

    const { state, handleChange } = useContext(paletteCreatorContext);

    const handleInputChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const value = e.target.value;
        handleChange({ [key]: value })
    }

    return(
        <div className='create-description-component'>
            <form>
                <div>
                    <label htmlFor='title'>Name of Palette:</label>
                    <input 
                        onChange={handleInputChange}
                        value={state.title}
                        name='title'
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <textarea 
                        onChange={handleInputChange}
                        value={state.description}
                        name='description'
                    />
                </div>
            </form>
        </div>
    )
}

export default PaletteDescription;