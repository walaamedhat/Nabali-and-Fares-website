import { combineReducers } from 'redux';
import userData from './loginReducer';

import getUserData from './getUserDataReducer';
import updateUserData from './updateUserDataReducer';
import auth from './authReducer';
import filesUrl from './uploadFilesReducer';
import {transferIdReducer} from './transferNewsId';

import newsData from './newsReducers/addNewsReducer'
import editnewsData from './newsReducers/editNewsReducer'
import deletenewsData from './newsReducers/deleteNewsReducer'
import allNews from './newsReducers/getNewsReducer'

import projectsData from './projectsReducers/addProjectsReducer';
import allProjects from './projectsReducers/getProjectsReducer'
import deletedProject from './projectsReducers/deleteProjectReducer';
import editPrjectData from './projectsReducers/editProjectReducer';
import transferProject from './projectsReducers/transferIdProjectReducer';

export default combineReducers({
    userData,
    newsData,
    editnewsData,
    deletenewsData,
    getUserData,
    updateUserData,
    auth,
    filesUrl,
    projectsData,
    allNews,
    allProjects,
    transferIdReducer,
    deletedProject,
    editPrjectData,
    transferProject
});
