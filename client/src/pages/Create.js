import React from 'react';

//components
import AddTags from '../components/CreateParts/AddTags';
import PaletteDescription from '../components/CreateParts/PaletteDescription';
import PalettePicker from '../components/CreateParts/PalettePicker';
import ColorPicker from '../components/CreateParts/ColorPicker';

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
                <div>
                    <ColorPicker />
                    <PalettePicker />
                </div>
            </div>
        </div>
    )
};

export default Create;