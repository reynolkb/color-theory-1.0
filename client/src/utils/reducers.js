// import our actions
// list of the possible actions we can perform to update state
import {
    UPDATE_FILTERED_PALETTES,
    UPDATE_DAILY_PALETTE,
    UPDATE_WEEKLY_PALETTE,
    UPDATE_MY_PALETTES,
    UPDATE_FAVORITE_PALETTES,
    UPDATE_CURRENT_PALETTE
} from "./actions";

const initialState = {
    filteredPalettes: [],
    dailyPalette: '',
    weeklyPalette: '',
    myPalette: [],
    favorites: [],
    currentPalette: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTERED_PALETTES:
            return {
                ...state,
                filteredPalettes: [...state.filteredPalettes, ...action.palette]
            };

        case UPDATE_DAILY_PALETTE:
            return {
                ...state,
                dailyPalette: action.dailyPalette
            };

        case UPDATE_WEEKLY_PALETTE:
            return {
                ...state,
                weeklyPalette: action.weeklyPalette
            };

        case UPDATE_MY_PALETTES:
            return {
                ...state,
                myPalette: [...state.myPalette, ...action.palette]
            };

        case UPDATE_FAVORITE_PALETTES:
            return {
                ...state,
                favorites: [...state.favorites, ...action.palette]
            };

        case UPDATE_CURRENT_PALETTE:
            return {
                ...state,
                currentPalette: currentPalette
            };

        default:
            return state;
    }
}

export default reducer;
