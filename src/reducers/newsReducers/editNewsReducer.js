import {
    EDIT_NEWS_START,
    EDIT_NEWS_SUCCESS,
    EDIT_NEWS_FAILURE
} from '../../constants/actionTypes';

const intialState = {
    newsData:[],
    isFetching: false,
    error: undefined,
    message: ''
}


const editNewsData = (state = intialState, action) => {
    switch(action.type){
        case EDIT_NEWS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case EDIT_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:action.payload,
                isFetching:false,
                message: 'Edit News Success'
            }
        }
        case EDIT_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Edit News Faild, Try Again!!'
            }
        }
        case 'TransferDataSuccess': {
            return {
              ...state,
              newsData: action.payload,
              isFetching: false
        }}

        case 'HANDEL_NEWS_INPUTS_CHANGE' : { 
            
            return{
                ...state,
                newsData: [{
                    ...state.newsData[0],
                    [action.payload.name]: action.payload.value
                }]
            }            
        }
        default: return state
    }
}

export default editNewsData;
