import {
    DELETE_NEWS_START,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE
} from '../constants/actionTypes';

const intialState = {
    newsData:{},
    isFetching: false,
    error: undefined,
    message: ''
}


const deleteNewsData = (state = intialState, action) => {
    switch(action.type){
        case DELETE_NEWS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case DELETE_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:action.payload,
                isFetching:false,
                message: 'Delete News Success'
            }
        }
        case DELETE_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Delete News Faild, Try Again!!'
            }
        }
        default: return state
    }
}

export default deleteNewsData;
