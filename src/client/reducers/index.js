import { combineReducers } from 'redux';
import ourprojects from './ourprojectsReducer';
import starProjects from './starProjectReducer';
import allNews from './allNewsReducer';
import projectData from './projectData';
import newsData from './newsDataReducer';
import addComment from './addComments';
import allComment from './allComments';

export default combineReducers({
    ourprojects,
    starProjects,
    allNews,
    projectData,
    newsData,
    addComment,
    allComment
});
