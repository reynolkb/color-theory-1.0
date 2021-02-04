import React from 'react';

// components
import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';
import SearchBar from '../SearchBar';

import { convertToObj } from '../../utils/dateFormat';

// for Global State using Redux, use React-Redux hook
import { useSelector, useDispatch } from 'react-redux';
// import { UPDATE_PALETTES } from '../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Sidebar = () => {
// const Sidebar = ({ palettesData }) => {

    // console.log(palettes);

    // use global store
    const state = useSelector(state => state);

    // useDispatch method for interacting with global store
    // const dispatch = useDispatch();
    
    // destructure palettes from state
    const { palettes } = state;

    // get today's date and get the date portion of the Date object in English 
    const today = new Date();
    const todayToString = today.toDateString();

    // create date for 7 days ago and get the date portion of the Date object in English
    const todayMinusSix = today.getDate() - 6;
    const pastWeek = today.setDate(todayMinusSix);
    const weeklyObject = new Date(pastWeek);

    const recentPalettes = palettes.sort((a, b) => b.createdAt - a.createdAt);
    console.log(recentPalettes);

    function generateDaily() {

        // for palette-of-the-day
        // create an Array to hold all palettes created today
        const dailyArray = [];
        // data is received in descending order, so push the most recent palette in case no palettes have been created today
        dailyArray.push(recentPalettes[0]);
        // loop over daily palette array to add palettes created today and stop once it reaches the first palette from yesterday
        for (let i = 1; i < recentPalettes.length; i++) {

            // convert date from createdAt property of palette[i]
            const createdAt = recentPalettes[i].createdAt;
            const date = convertToObj(createdAt);
            const dateToString = date.toDateString();

            if (dateToString === todayToString) {
                // console.log("this was created today.");

                dailyArray.push(recentPalettes[i]);
                // console.log(dailyArray);

            } else {
                // console.log("this was not created today.");
                // console.log(palettes[i]);
                break;
            }

        }

        // sort the dailyArray by most upvotes and return in descending order
        let sortedDaily = dailyArray.sort((a, b) => b.upvoteCount - a.upvoteCount);
        // console.log(sortedDaily);
        // return the 0th index since it has the most upvotes
        return sortedDaily[0];

    }

    function generateWeekly() {
        // console.log(palettes);
        // for palette-of-the-day
        // create an Array to hold all palettes created today
        const weeklyArray = [];
        // data is received in descending order, so push the most recent palette in case no palettes have been created today
        weeklyArray.push(recentPalettes[0]);
        // loop over daily palette array to add palettes created today and stop once it reaches the first palette from yesterday
        for (let i = 1; i < recentPalettes.length; i++) {

            // convert date from createdAt property of palette[i]
            const createdAt = recentPalettes[i].createdAt;
            const date = convertToObj(createdAt);

            if (date >= weeklyObject) {
                // console.log("this was created in the last week.");
                // console.log(palette[i]);
                weeklyArray.push(recentPalettes[i]);
                // console.log(weeklyArray);

            } else {
                // console.log("this was not created over the last week.");
                // console.log(palettes[i]);
                break;
            }

        }

        // sort the weeklyArray by most upvotes and return in descending order
        let sortedWeekly = weeklyArray.sort((a, b) => b.upvoteCount - a.upvoteCount);
        // console.log(sortedWeekly);
        // return the 0th index since it has the most upvotes
        return sortedWeekly[0];

    }

    const daily = generateDaily();
    const weekly = generateWeekly();

    return (

        <div className='sidebar-component-wrapper'>
            {/* search component */}
            <SearchBar />
            <div className='trending-wrapper'>
                {/* palette of the day  */}
                <div className='daily-wrapper'>
                    <h3 className='sidebar-title'>Trending Today</h3>
                    <DailyPalette palette={daily} />
                </div>
                <div className='weekly-wrapper'>
                    {/* palette of the week  */}
                    <h3 className='sidebar-title'>Trending this Week</h3>
                    <WeeklyPalette palette={weekly} />
                </div>

            </div>
        </div>
    )
};

export default Sidebar;
