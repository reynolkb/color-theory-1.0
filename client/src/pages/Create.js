import React from 'react';

//components
import AddTags from '../components/CreateParts/AddTags';
import ColorPicker from '../components/CreateParts/ColorPicker';
import PaletteDescription from '../components/CreateParts/PaletteDescription';

const Create = () => {

    return(
        <div className='create-pg-wrapper'>
            <h3>Create a Palette</h3>
            <div className='create-wrapper'>
                {/* left side */}
                <div className='create-form-wrapper'>
                    <PaletteDescription />
                    <AddTags />
                </div>
                {/* right side */}
                <ColorPicker />
            </div>
        </div>
    )
};

export default Create;