import React from 'react';
import Colors from '../../components/Colors';

const Palette = () => {

    return(
        <>
        <div>
            <h3>Title of Palette</h3>
            <p>by User on Date</p>
            <div>
                <Colors />
            </div>
            <div>
                Likes Saves Share
            </div>
            <div>
                <h5>Description:</h5>
                <p>
                    lorem ipsum
                </p>
            </div>
        </div>
        </>
    )
}

export default Palette;