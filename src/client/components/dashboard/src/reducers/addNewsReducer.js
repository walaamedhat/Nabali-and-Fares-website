import {
    ADDING_NEWS_START,
    ADDING_NEWS_SUCCESS,
    ADDING_NEWS_FAILURE
} from '../constants/actionTypes';

const intialState = {
    newsdata:{},
    isFetching: false,
    error: undefined
}


const addNewsData = (state = intialState, action) => {
    switch(action.type){
        case ADDING_NEWS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case ADDING_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:action.payload,
                isFetching:false
            }
        }
        case ADDING_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default addNewsData;