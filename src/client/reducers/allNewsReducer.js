import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE
} from '../constants/actionTypes';

const initalState = {
    newsData : [],
    error: undefined,
    isFetching: false
}

const newsData = (state = initalState , action)  => {
    switch(action.type){
        case GET_NEWS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:action.payload.data,
                isFetching:false
            }
        }
        case GET_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default newsData;
