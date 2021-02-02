import React from 'react';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_FILTER } from '../../utils/actions';
// import helper
import { idbPromise } from '../../utils/helpers';

const Filter = () => {

    const state = useSelector(state => state);
    // console.log("See below for current Global State:");
    // console.log(state);
    const dispatch = useDispatch();

    const { currentfilter } = state;
    // console.log(filter[0]);
    // console.log(filter[0].value);
    // console.log(currentfilter);

    const changeFilter = event => {
        // console.log(event.target.value);
        dispatch({
            type: CURRENT_FILTER,
            currentfilter: event.target.value
        });
        // console.log("This is the current filter");
        // console.log(currentfilter);
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