import { combineReducers } from 'redux';
import userData from './loginReducer';
import getUserData from './getUserDataReducer';
import updateUserData from './updateUserDataReducer';
import auth from './authReducer';

export default combineReducers({
    userData,
    getUserData,
    updateUserData,
    auth
});
