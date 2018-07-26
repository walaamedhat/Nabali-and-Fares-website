import {
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE
} from '../constants/actionTypes'

const intialState = {
    message:'',
    isFetching: false,
    error: undefined
}


const updateUserDate = (state = intialState, action) => {
    switch(action.type){
        case UPDATE_USER_DATA_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case UPDATE_USER_DATA_SUCCESS :{
            return{
                ...state,
                message:action.payload,
                isFetching:false
            }
        }
        case UPDATE_USER_DATA_FAILURE :{
            return{
                ...state,
                message: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default updateUserDate;
