import React from 'react';

import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';

// this is Cat's test data
import { dailyPalette, weeklyPalette } from '../../const/colors';



const Sidebar = () => {

    // query for sidebar content - trending today
    // const { loading, data: dailyData } = useQuery(QUERY_DAILY_PALETTE);
    // query for sidebar content - trending this week
    // const { loading, data: weeklyData } = useQuery(QUERY_WEEKLY_PALETTE);

    // constant for sidebar content - trending today
    // const daily = dailyData?.palettes || [];
    // constant for sidebar content - trending this week
    // const weekly = weeklyData?.palettes || [];
    const daily = dailyPalette;
    const weekly = weeklyPalette;



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
