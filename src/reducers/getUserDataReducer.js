import {
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE
} from '../constants/actionTypes'

const intialState = {
    message:'',
    isFetching: false,
    error: undefined
}


const getUserData = (state = intialState, action) => {
    switch(action.type){
        case GET_USER_DATA_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_USER_DATA_SUCCESS :{
            return{
                ...state,
                message:action.payload,
                isFetching:false
            }
        }
        case GET_USER_DATA_FAILURE :{
            return{
                ...state,
                message: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default getUserData;
