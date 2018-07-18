import { combineReducers } from 'redux';
import userData from './loginReducer';
import newsData from './addNewsReducer'
export default combineReducers({
    userData,
    newsData
});