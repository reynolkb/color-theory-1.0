import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom"

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Palette from '../components/Palette';
// import UserPalettes from '../components/UserPageParts/UserPalettes'

const UserPage = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
      });

    if (loading) {
        return <div>Loading User...</div>;
    }

    const profile = userParam ? data.user : data.me;

    function filterMyPalettes() {
        return profile.myPalettes.sort((a, b) => b.createdAt - a.createdAt);
    }
    function filterFavoritePalettes() {
        return profile.favorites.sort((a, b) => b.createdAt - a.createdAt);
    }

    return(
        <div className='global-wrapper'>
            <div className='user-page'>
                <h3 className='page-title'>{profile.username}'s Palette Collections</h3>
                <div className='collection-wrapper'>
                    <div className='user-paletter-wrapper'>
                        <h4>User's Palette</h4>
                        <Palette palettes={filterMyPalettes()} />
                    </div>
                    <div className='saved-palette-wrapper'>
                        <h4>Saved Palettes</h4>
                        <Palette palettes={filterFavoritePalettes()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;