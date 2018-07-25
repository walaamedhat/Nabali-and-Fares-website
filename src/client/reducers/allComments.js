import {
    GET_COMMENT_START,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAILURE
} from '../constants/actionTypes';

const initalState = {
    comments : [],
    error: undefined,
    isFetching: false
}

const comment = (state = initalState , action)  => {
    switch(action.type){
        case GET_COMMENT_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_COMMENT_SUCCESS :{
            return{
                ...state,
                comments:action.payload,
                isFetching:false
            }
        }
        case GET_COMMENT_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default comment;
