import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE
} from '../constants/actionTypes';

const intialState = {
    newsData:{},
    isFetching: false,
    error: undefined,
    message: ''
}


const getNewsData = (state = intialState, action) => {
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
                newsData:action.payload,
                isFetching:false,
                message: 'Get News Success'
            }
        }
        case GET_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Get News Faild, Try Again!!'
            }
        }
        default: return state
    }
}

export default getNewsData;
