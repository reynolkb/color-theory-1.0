// Actions define the types of events that can be emitted to update state. 

// actions for the home page
// store the data retrieved by Apollo for the user-filtered palettes in this global state
export const UPDATE_PALETTES = "UPDATE_PALETTES";

// store the filter choices
export const CURRENT_FILTER = "CURRENT_FILTER";

// store the tags
export const UPDATE_TAGS = "UPDATE_TAGS";

// store the current tag
export const CURRENT_TAG = "CURRENT_TAG";

// action for the user page and create palette page
// store the data retrieved by Apollo for myPalettes in this global state
export const UPDATE_MY_PALETTES = "UPDATE_MY_PALETTES";

// action for the user page 
// store the data retrieved by Apollo for favorites in this global state
export const UPDATE_FAVORITE_PALETTES = "UPDATE_FAVORITE_PALETTES";

// action for the details page
// store the data retrieved by Apollo for myPalettes in this global state
export const UPDATE_CURRENT_PALETTE = "UPDATE_CURRENT_PALETTE";
