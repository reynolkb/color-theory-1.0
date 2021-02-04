import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_UPVOTE, ADD_FAV_PALETTE } from '../../utils/mutations';

const SocialButtons = ({ upvoteCount, saveCount, paletteId}) => {
    const [addUpvote] = useMutation(ADD_UPVOTE);
    const [upvote, setUpvote] = useState(upvoteCount);

    const [addFavPalette] = useMutation(ADD_FAV_PALETTE);
    const [favorite, setFavorite] = useState(saveCount);

    async function upvoteClick(paletteId) {
        try {
            const {data} = await addUpvote({
                variables: {paletteId}
            });
            console.log(data);
            setUpvote(data.addUpvote.upvotes.length);
        } catch (err) {
			console.error(err);
		}
    };

    async function saveClick(paletteId) {
        try {
            const {data} = await addFavPalette({
                variables: {paletteId}
            });
            setFavorite(data.addFavPalette.saves.length);
        } catch (err) {
			console.error(err);
		}
    };

    return(
        <div className='likes-shares'>
        <div>
            <i className="fas fa-heart" onClick={() =>
                upvoteClick(paletteId)
            }></i>{upvote}
            <i className="far fa-bookmark" onClick={() => {
                saveClick(paletteId)
            }}></i>{favorite} 
        </div>
        <div className='share-button'>
            <a href="http://www.facebook.com/sharer.php?u=https://color-theory.herokuapp.com/"
            target="_blank" rel="noreferrer">
                <i className="fas fa-share-square"></i> Share
            </a>
        </div>
    </div>
    )
}

export default SocialButtons;