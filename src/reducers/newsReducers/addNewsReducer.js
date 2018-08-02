import {
    ADDING_NEWS_START,
    ADDING_NEWS_SUCCESS,
    ADDING_NEWS_FAILURE
} from '../../constants/actionTypes';

const intialState = {
    newsData:{},
    isFetching: false,
    isAddingSuccess: false,
    error: undefined,
    message: ''
}


const addNewsData = (state = intialState, action) => {
    switch(action.type){
        case ADDING_NEWS_START:{
            return{
                ...state,
                isFetching:true,
                isAddingSuccess:false
            }
        }
        case ADDING_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:action.payload,
                isFetching:false,
                isAddingSuccess: true,
                message: 'Add News Success'
            }
        }
        case ADDING_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                isAddingSuccess:false,
                message: 'Add News Faild, Try Again!!'
            }
        }
        default: return state
    }
}

export default addNewsData;
