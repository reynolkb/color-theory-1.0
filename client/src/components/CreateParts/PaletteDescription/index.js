import React from 'react';

const PaletteDescription = () => {
    return(
        <div className='create-description-component'>
            <form>
                <div>
                    <label>Name of Palette:</label>
                    <input />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea />
                </div>
            </form>
        </div>
    )
}

export default PaletteDescription;