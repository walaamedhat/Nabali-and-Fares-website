import {
    ADD_COMMENT_START,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from '../constants/actionTypes';

const initalState = {
    comments : [],
    error: undefined,
    isFetching: false
}

const comment = (state = initalState , action)  => {
    switch(action.type){
        case ADD_COMMENT_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case ADD_COMMENT_SUCCESS :{
            return{
                ...state,
                comments:action.payload.data,
                isFetching:false
            }
        }
        case ADD_COMMENT_FAILURE :{
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
