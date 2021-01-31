import React, { useState } from 'react';

import DailyPalette from '../DailyPalette';
import WeeklyPalette from '../WeeklyPalette';

import { dateFormat, convertToObj } from '../../utils/dateFormat';
import { palette } from '../../const/colors';

// this is Cat's test data
// import { dailyPalette, weeklyPalette } from '../../const/colors';

const Sidebar = ({ palettes }) => {

    // get today's date and get the date portion of the Date object in English 
    const today = new Date();
    const todayToString = today.toDateString();

    // create date for 7 days ago and get the date portion of the Date object in English
    const todayMinusSix = today.getDate() - 6;
    const pastWeek = today.setDate(todayMinusSix);
    const weeklyObject = new Date(pastWeek);
    // console.log(weeklyObject);
    // console.log("Week Trend is an " + typeof weeklyObject);
    const weeklyToString = weeklyObject.toDateString();

    function generateDaily() {

        // for palette-of-the-day
        // create an Array to hold all palettes created today
        const dailyArray = [];
        // data is received in descending order, so push the most recent palette in case no palettes have been created today
        dailyArray.push(palettes[0]);
        // loop over daily palette array to add palettes created today and stop once it reaches the first palette from yesterday
        for (let i = 1; i < palettes.length; i++) {

            // convert date from createdAt property of palette[i]
            const createdAt = palettes[i].createdAt;
            const date = convertToObj(createdAt);
            const dateToString = date.toDateString();

            if (dateToString === todayToString) {
                // console.log("this was created today.");
                dailyArray.push(palettes[i]);
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
        weeklyArray.push(palettes[0]);
        // loop over daily palette array to add palettes created today and stop once it reaches the first palette from yesterday
        for (let i = 1; i < palettes.length; i++) {

            // convert date from createdAt property of palette[i]
            const createdAt = palettes[i].createdAt;
            const date = convertToObj(createdAt);
            // console.log(date);
            // console.log("Date is an: " + typeof date);
            const dateToString = date.toDateString();
            // console.log("This is the palette at index " + i);
            // console.log(dateToString);

            if (date >= weeklyObject) {
                // console.log("this was created in the last week.");
                // console.log(palette[i]);
                weeklyArray.push(palettes[i]);
                // console.log(weeklyArray);

            } else {
                // console.log("this was not created over the last week.");
                // console.log(palettes[i]);
                break;
            }

        }

        // sort the dailyArray by most upvotes and return in descending order
        let sortedWeekly = weeklyArray.sort((a, b) => b.upvoteCount - a.upvoteCount);
        // console.log(sortedWeekly);
        // return the 0th index since it has the most upvotes
        return sortedWeekly[0];

    }

    const daily = generateDaily();
    const weekly = generateWeekly();

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
