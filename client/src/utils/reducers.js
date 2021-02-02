// import our actions
// list of the possible actions we can perform to update state
import {
    UPDATE_PALETTES,
    CURRENT_FILTER,
    UPDATE_TAGS, 
    CURRENT_TAG
    // UPDATE_MY_PALETTES,
    // UPDATE_FAVORITE_PALETTES,
    // UPDATE_CURRENT_PALETTE,
} from './actions';

const initialState = {
    palettes: [],
    currentfilter: 'recent',
    tags: [],
    currentTag: {}
    // myPalette: [],
    // favorites: [],
    // currentPalette: ''
};

// console.log("The following is the initial state: ");
// console.log(initialState);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PALETTES:
            return {
                ...state,
                palettes: [...action.palettes]
            };
        case CURRENT_FILTER:
            return {
                ...state,
                currentfilter: action.currentfilter
            };
        case UPDATE_TAGS:
            return {
                ...state,
                tags: [...action.tags]
            };
        case CURRENT_TAG:
            return {
                ...state,
                currentTag: action.currentTag
            }

        // case UPDATE_MY_PALETTES:
        //     return {
        //         ...state,
        //         myPalette: [...state.myPalette, ...action.palette]
        //     };

        // case UPDATE_FAVORITE_PALETTES:
        //     return {
        //         ...state,
        //         favorites: [...state.favorites, ...action.palette]
        //     };

        // case UPDATE_CURRENT_PALETTE:
        //     return {
        //         ...state,
        //         currentPalette: currentPalette
        //     };

        default:
            return state;
    }
}

export default reducer;
