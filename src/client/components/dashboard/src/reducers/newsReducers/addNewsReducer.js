import {
    ADDING_NEWS_START,
    ADDING_NEWS_SUCCESS,
    ADDING_NEWS_FAILURE
} from '../../constants/actionTypes';

const intialState = {
    newsData:{},
    isFetching: false,
    error: undefined,
    message: ''
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
                isFetching:false,
                message: 'Add News Success'
            }
        }
        case ADDING_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Add News Faild, Try Again!!'
            }
        }
        default: return state
    }
}

export default addNewsData;
