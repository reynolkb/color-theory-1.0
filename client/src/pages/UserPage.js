import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom"

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Palette from '../components/Palette';
// import UserPalettes from '../components/UserPageParts/UserPalettes'

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PALETTES, UPDATE_USER } from '../utils/actions';
import { idbPromise } from '../utils/helpers';


const UserPage = () => {

    const { username: userParam } = useParams();

    // use global state
    const state = useSelector(state => state);
    // console.log(state);

    // useDispatch method for interacting with global state
    const dispatch = useDispatch();
    
    // destructure from state
    const { user } = state;
    console.log(user);
    
    // query for user data
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    console.log(data);

    useEffect(() => {

        if (data) {
            // console.log(data);
            // console.log(data.me);
            // these are both arrays of data
            // console.log(data.me.myPalettes);
            // console.log(data.me.favorites);

            const dataArray = [data.me];
            console.log(dataArray);

            dispatch({
                type: UPDATE_USER,
                user: dataArray
            })

            dataArray.forEach((me) => {
                idbPromise('user', 'put', me);
            })

            // console.log(state);
            // console.log(data.user[0].favorites);
            // console.log(state.user[0].myPalettes);
        }
        else if (!loading) {
            idbPromise('user', 'get').then((user) => {
                dispatch({
                    type: UPDATE_USER,
                    user: user
                });
            });
        }


    }, [data, loading, dispatch]);

    if (loading) {
        return <div>Loading User...</div>;
    }

    function filterMyPalettes() {

        // const myPalettesFiltered = user[0].myPalettes.sort((a, b) => b.createdAt - a.createdAt);
        // console.log(myPalettesFiltered);

        return user[0].myPalettes.sort((a, b) => b.createdAt - a.createdAt);
    
    }

    function filterFavoritePalettes() {

        // const myPalettesFiltered = user[0].myPalettes.sort((a, b) => b.createdAt - a.createdAt);
        // console.log(myPalettesFiltered);

        return user[0].favorites.sort((a, b) => b.createdAt - a.createdAt);
    
    }



    // const profile = userParam ? data.user : data.me;

    return (
        <div className='global-wrapper'>
            <div className='user-page'>
                <h3 className='page-title'>{user[0].username}'s Palette Collections</h3>
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