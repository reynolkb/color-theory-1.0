import React from 'react';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_FILTER } from '../../utils/actions';

const Filter = () => {

    // use global store
    const state = useSelector(state => state);

    // useDispatch method for interacting with global store
    const dispatch = useDispatch();

    // destructure currentfilter from state
    const { currentfilter } = state;

    // handle change event to store current filter selected
    const changeFilter = event => {
        dispatch({
            type: CURRENT_FILTER,
            currentfilter: event.target.value
        });
    }

    return (
        <div className='filter-selection'>
            <form>
                <select className='filter' name='filter' onChange={changeFilter} value={currentfilter}>
                    <option value='most-liked'>Most Liked</option>
                    <option value='recent'>Recent</option>
                </select>
            </form>
        </div>
    )
}

export default Filter;