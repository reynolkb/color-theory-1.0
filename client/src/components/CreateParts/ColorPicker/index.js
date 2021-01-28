//libraries
import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    state = { 
        background: '#decafb'
        }

    handleChange = (color) => {
        this.setState({ background: color.rgb });
    };


    render() {
        return (
            <SketchPicker 
                color={ this.state.background }
                onChange={ this.handleChange }
            />
        );
    }
}

export default ColorPicker;