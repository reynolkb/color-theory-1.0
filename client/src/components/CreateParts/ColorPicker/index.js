//libraries
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';



const ColorPicker = () => {

    const [ colorState, setColorState ] = useState({
        primary: '#f6f6f6',
        secondary: '#f1f1f1',
        accent1: '#f6f6f6',
        accent2: '#f1f1f1',
        accent3: '#f6f6f6',
    });
    const [ paletteState, setPaletteState ] = useState({
        current: colorState.primary,
        workingColor: 'primary'
    });

    function handleChange(color) {
        setPaletteState({ 
            current: color.hex,
            workingColor: paletteState.workingColor
        });
        const newState = colorState;
        newState[ paletteState.workingColor ] = color.hex;
        setColorState( newState );
    }

    function generateHandler(key) {
        return () => {
            setPaletteState({
                workingColor: key,
                current: colorState[key]
            });
        }
    }

    return(
        <div className='create-palette-wrapper'>
            <SketchPicker 
                color={ paletteState.current }
                onChange={ handleChange }
            />
            <div className='color-wrapper'>
                <div className='color-wrapper-aspect-ratio'>
                    <div onClick={ generateHandler('primary') } style={{ backgroundColor: colorState.primary, flexGrow: '2.5' }}>primary</div>
                    <div onClick={ generateHandler('secondary') } style={{ backgroundColor: colorState.secondary, flexGrow: '2' }}>secondary</div>
                    <div onClick={ generateHandler('accent1') } style={{ backgroundColor: colorState.accent1 }}>acc1</div>
                    <div onClick={ generateHandler('accent2') } style={{ backgroundColor: colorState.accent2 }}>acc2</div>
                    <div onClick={ generateHandler('accent3') } style={{ backgroundColor: colorState.accent3 }}>acc3</div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;