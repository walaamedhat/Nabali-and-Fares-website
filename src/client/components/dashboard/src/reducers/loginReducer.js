import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constants/actionTypes'

const intialState = {
    userdata:{},
    isFetching: false,
    error: undefined
}


const sendUserDate = (state = intialState, action) => {
    switch(action.type){
        case LOGIN_USER_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case LOGIN_USER_SUCCESS :{
            return{
                ...state,
                projectData:action.payload,
                isFetching:false
            }
        }
        case LOGIN_USER_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default sendUserDate;