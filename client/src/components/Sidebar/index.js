import React from 'react';

import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';

// this is Cat's test data
import { dailyPalette, weeklyPalette } from '../../const/colors';
// import dateFormat from '../../utils/dateFormat';



const Sidebar = ({ palettes }) => {

    // query for sidebar content - trending today
    // const { loading, data: dailyData } = useQuery(QUERY_DAILY_PALETTE);
    // query for sidebar content - trending this week
    // const { loading, data: weeklyData } = useQuery(QUERY_WEEKLY_PALETTE);

    // constant for sidebar content - trending today
    // const daily = dailyData?.palettes || [];
    // constant for sidebar content - trending this week
    // const weekly = weeklyData?.palettes || [];
    const daily = palettes[10];
    const weekly = palettes[40];

    console.log(palettes);
    console.log(palettes[0].title);
    console.log(palettes[0].createdAt);

    // const dateToString = Date(palettes[0].createdAt);
    // console.log(dateToString);
    // const convertedDate = new Date(palettes[0].createdAt);
    // console.log(convertedDate);
    // const today = new Date();
    // console.log(today);

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
