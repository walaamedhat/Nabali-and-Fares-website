import { combineReducers } from 'redux';
import userData from './loginReducer';
import newsData from './addNewsReducer'
import editnewsData from './editNewsReducer'
import deletenewsData from './deleteNewsReducer'
import allNews from './getNewsReducer'
import getUserData from './getUserDataReducer';
import updateUserData from './updateUserDataReducer';
import auth from './authReducer';
import filesUrl from './uploadFilesReducer';
import {transferIdReducer} from './transferNewsId';

export default combineReducers({
    userData,
    newsData,
    editnewsData,
    deletenewsData,
    getUserData,
    updateUserData,
    auth,
    filesUrl,
    allNews,
    transferIdReducer
});
