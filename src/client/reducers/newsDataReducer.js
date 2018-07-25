import {
    GET_NEWS_DATA_START,
    GET_NEWS_DATA_SUCCESS,
    GET_NEWS_DATA_FAILURE
} from '../constants/actionTypes';



const initalState = {
    newsData : [],
    error: undefined,
    isFetching: false
}

const newsdata = (state = initalState , action)  => {
    switch(action.type){
        case GET_NEWS_DATA_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_NEWS_DATA_SUCCESS :{
            return{
                ...state,
                newsData:action.payload.data,
                isFetching:false
            }
        }
        case GET_NEWS_DATA_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default newsdata;
