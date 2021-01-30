import React from 'react';

import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';

import { dateFormat, convertToInt } from '../../utils/dateFormat';

// this is Cat's test data
// import { dailyPalette, weeklyPalette } from '../../const/colors';

const Sidebar = ({ palettes }) => {

    console.log(palettes);

    // get today's date
    const today = new Date();
    // console.log(today);
    // console.log(typeof today);
    // console.log("This is today's date: " + today.toDateString());

    // create yesterday's date
    const todayMinusOne = today.getDate() - 1;
    const yesterday = today.setDate(todayMinusOne);
    // console.log(yesterday);
    // console.log(typeof yesterday);
    const yesterdayObject = new Date(yesterday);
    // console.log(typeof yesterdayObject);
    // console.log(yesterdayObject);
    const yesterdayToString = yesterdayObject.toDateString();
    // console.log(yesterdayToString);
    // console.log(typeof yesterdayToString);
    // console.log("This is yesterday's date: " + yesterday.toDateString());
    // const yesterdayInMilli = yesterday.getTime();
    // console.log("This is yesterday's date: " + yesterdayInMilli);
    
    // for palette-of-the-day
    // loop over palette array starting at the beginning since array is in descending order
    for (let i = 0; i < 4; i++) {
    // for (let i = 0; i < palettes.length; i++) {

        // let recent = palettes[0].createdAt;
        // let prior = palettes[i].createdAt;

        // let palettesToday = [palettes[0]];

        // if (recent === )

        // const date = dateCompareFormat(palettes[i].createdAt);
        const createdAt = palettes[i].createdAt;
        // console.log(typeof createdAt);
        // console.log(createdAt);
        const date = convertToInt(createdAt);
        // console.log(typeof date);
        // console.log("This is palette " + i + " with a date of: " + date);
        const dateToString = date.toDateString();
        console.log(dateToString);
        console.log(typeof dateToString);

        if (dateToString === yesterdayToString) {
            console.log("this was not created today.");
        } else {
            console.log("this was created today");
        }




    // if (palettes[i].createdAt
    }


    // stop once it hits a date from yesterday

    const daily = palettes[1];



    const weekly = palettes[2];




    // console.log(todayFormatted);



    // const dailyFilter = () => {

    //     const today = Date();
    //     console.log(today);

    // }

    return (
        <div>
            <h3 className='sidebar-title'>Trending Today</h3>
            {/* palette of the day  */}
            <DailyPalette palette={daily} />

            <h3 className='sidebar-title'>Trending this Week</h3>
            {/* palette of the week  */}
            <WeeklyPalette palette={weekly} />
        </div>
    )
};

export default Sidebar;
