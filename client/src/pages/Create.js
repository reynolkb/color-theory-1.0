import React from 'react';
//context
import CreateProvider from '../components/CreateParts/CreateProvider';

//components
import AddTags from '../components/CreateParts/AddTags';
import ColorPicker from '../components/CreateParts/ColorPicker';
import PaletteDescription from '../components/CreateParts/PaletteDescription';
import CreateButton from '../components/CreateParts/CreateButton';

const Create = () => {

    return(
        <CreateProvider>
            <div className='create-pg-wrapper global-wrapper'>
                <div className='create-palette-header'>
                    <h3 className='page-title'>Create a Palette</h3>
                    <CreateButton />
                </div>
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
        </CreateProvider>
    )
};

export default Create;