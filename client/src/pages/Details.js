// libraries
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

// component
import Palette from '../components/Palette';
import Preview from '../pages/Preview';
import TagHolder from '../components/TagHolder';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PALETTES } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

const Details = () => {

    // pull paletteId from path
    const { id: paletteId } = useParams();

    const [currentDetail, setCurrentDetail] = useState([]);
    const [currentTags, setCurrentTags] = useState([{name:'Tags'},{name: 'Go'},{name: 'Here'}]);
    const [currentPreview, setCurrentPreview] = useState({
        accent1: "#f03d72",
        accent2: "#ccf03d",
        accent3: "#3d9ff0",
        primary: "#e73df0",
        secondary: "#613df0",
    });

    // use global state
    const state = useSelector(state => state);
    // console.log(state);

    // useDispatch method for interacting with global state
    const dispatch = useDispatch();

    // destructure palettes from state
    const { palettes } = state;
    // console.log(palettes);

    useEffect(() => {

        if (palettes.length) {
            // filter out the ID that was searched
            const detailPalette = palettes.filter(palette => palette._id === paletteId);
            // set the states
            setCurrentDetail(detailPalette);
            setCurrentTags(detailPalette[0].tags);
            setCurrentPreview(detailPalette[0]);

        }
        else if (!palettes.length) {

            idbPromise('palettes', 'get').then((palettes) => {
                dispatch({
                    type: UPDATE_PALETTES,
                    palettes: palettes
                });
            });
        }
    
    }, [palettes, paletteId, dispatch]);

    return(
        <div className='global-wrapper'>
            {/* left side */}
            <div className='details-palette'>
                <Palette key={paletteId} palettes={currentDetail}/>
                <TagHolder tags={currentTags}/>
            </div>
            {/* right side */}
            <div className='details-preview'>
                <Preview palette={currentPreview} />
            </div>
        </div>
    )
}

export default Details;