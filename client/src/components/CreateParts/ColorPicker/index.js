//libraries
import React, { useContext } from 'react';
import { SketchPicker } from 'react-color';

import { paletteCreatorContext } from '../CreateProvider';

const ColorPicker = () => {

    const { state, handleChange } = useContext(paletteCreatorContext);

    function handleColorPicker(color) {
        handleChange({ 
            current: color.hex,
            workingColor: state.workingColor,
            [state.workingColor]: color.hex
        });
    }

    // this is a helper function to help dry our code
    function generateHandler(key) {
        return () => {
            handleChange({
                workingColor: key,
                current: state[key]
            });
        }
    }

    function activeSelection(key) {
        return key === state.workingColor ? 'active-color' : '';
    }

    return(
        <div className='create-palette-wrapper'>
            <SketchPicker 
                disableAlpha={true}
                width={ 250 }
                color={ state.current }
                onChange={ handleColorPicker }
            />
            <p>Select each box to add color to it.</p>
            <div className='color-wrapper create-color-div-wrapper'>
                <div className='color-wrapper-aspect-ratio'>
                    <div
                        className={activeSelection('primary')}
                        onClick={ generateHandler('primary') } 
                        style={{ backgroundColor: state.primary, flexGrow: '2.5' }}
                    />
                    <div
                        className={activeSelection('secondary')}
                        onClick={ generateHandler('secondary') } 
                        style={{ backgroundColor: state.secondary, flexGrow: '2' }}
                    />
                    <div
                        className={activeSelection('accent1')}
                        onClick={ generateHandler('accent1') } 
                        style={{ backgroundColor: state.accent1 }}
                    />
                    <div
                        className={activeSelection('accent2')}
                        onClick={ generateHandler('accent2') } 
                        style={{ backgroundColor: state.accent2 }}
                    />
                    <div
                        className={activeSelection('accent3')}
                        onClick={ generateHandler('accent3') } 
                        style={{ backgroundColor: state.accent3 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;