// import our actions
// list of the possible actions we can perform to update state
import {
    UPDATE_PALETTES,
    CURRENT_FILTER,
    UPDATE_TAGS,
    UPDATE_USER
} from './actions';

const initialState = {
    palettes: [],
    currentfilter: 'recent',
    tags: [],
    user: [{
        username: 'Color Theory',
        myPalettes: [],
        favorites: []
    }]
};

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
        case UPDATE_USER:
            return {
                ...state,
                user: [...action.user]
            };
        default:
            return state;
    }
}

export default reducer;
