import React from 'react';

import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';

// this is Cat's test data
// import { dailyPalette, weeklyPalette } from '../../const/colors';

const Sidebar = ({ palettes }) => {

    console.log(palettes);
    // for dummy data
    // const daily = dailyPalette;
    // const weekly = weeklyPalette;
    
    const daily = palettes[1];
    const weekly = palettes[2];

    const createdDate = palettes[1].createdAt;
    console.log("number of milliseconds: " + createdDate);
    console.log(typeof createdDate);

    const milliseconds = parseInt(createdDate);
    console.log(milliseconds);

    const convert = new Date(milliseconds);
    console.log(convert);


    // convert received date to string
    // const dateToString = Date(createdDate);
    // console.log(dateToString);
    // change received date to Date object
    // const dateObject = new Date(dateToString);
    // console.log(dateObject);

    // const todayFormatted = dateFormat(today);

    // console.log(todayFormatted);

    // if (palettes[0].createdAt === today) {
    //     console.log("we are equal");
    // } else {
    //     console.log("we are not equal");
    // }


    // const dailyFilter = () => {

    //     const today = Date();
    //     console.log(today);

    //     for (let i = 0; i < palettes.length; i++) {
    //         let dailyPal = {};
    //         if (palettes[i].createdAt
    //     }
    // }

    return (
        <div>
            <h3 className='sidebar-title'>Trending Today</h3>
            {/* palette of the day  */}
            <DailyPalette palette={daily}/>

            <h3 className='sidebar-title'>Trending this Week</h3>
            {/* palette of the week  */}
            <WeeklyPalette palette={weekly}/>
        </div>
    )
};

export default Sidebar;
