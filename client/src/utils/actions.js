// Actions define the types of events that can be emitted to update state. 

// actions for the home page
// store the data retrieved by Apollo for the most up-voted palettes in this global state
export const UPDATE_UPVOTED_PALETTES = "UPDATE_UPVOTED_PALETTES";

// store the data retrieved by Apollo for palette-of-the-day in this global state
export const UPDATE_DAILY_PALETTE = "UPDATE_DAILY_PALETTE";

// store the data retrieved by Apollo for palette-of-the-week in this global state
export const UPDATE_WEEKLY_PALETTE = "UPDATE_WEEKLY_PALETTE";

// store the data retrieved by Apollo for searched palettes in this global state
export const UPDATE_SEARCHED_PALETTE = "UPDATE_SEARCHED_PALETTE";

// action for the user page and create palette page
// store the data retrieved by Apollo for myPalettes in this global state
export const UPDATE_MY_PALETTES = "UPDATE_MY_PALETTES";

// action for the details page
// store the data retrieved by Apollo for myPalettes in this global state
export const UPDATE_CURRENT_PALETTE = "UPDATE_CURRENT_PALETTE";
