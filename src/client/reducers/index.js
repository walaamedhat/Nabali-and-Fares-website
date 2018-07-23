import { combineReducers } from 'redux';
import ourprojects from './ourprojectsReducer';
import starProjects from './starProjectReducer';
import allNews from './allNewsReducer';

export default combineReducers({
    ourprojects,
    starProjects,
    allNews
});
