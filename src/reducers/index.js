import { combineReducers } from 'redux';
import { DISPLAY_REPOS } from '../actions';

const repoReducer = (repos = {items:[]}, action) => {
    switch(action.type) {
        case DISPLAY_REPOS:
            return action.payload.data;
        default:
            return repos;
    }
};

const rootReducer = combineReducers({
    repos: repoReducer
});

export default rootReducer;