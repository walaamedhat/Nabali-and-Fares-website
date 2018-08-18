import {
    EDIT_NEWS_START,
    EDIT_NEWS_SUCCESS,
    EDIT_NEWS_FAILURE, 
    HANDLE_NEWS_TYPE_CHANGE
} from '../../constants/actionTypes';

const intialState = {
    newsData:[],
    isFetching: false,
    error: undefined,
    message: '',
    isUpdateSuccess: false
}


const editNewsData = (state = intialState, action) => {
    switch(action.type){
        case EDIT_NEWS_START:{
            return{
                ...state,
                isFetching:true,
                isUpdateSuccess:false
            }
        }
        case EDIT_NEWS_SUCCESS :{
            return{
                ...state,
                newsData:[action.payload],
                isFetching:false,
                message: 'Edit News Success',
                isUpdateSuccess: true
            }
        }
        case EDIT_NEWS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Edit News Faild, Try Again!!',
                isUpdateSuccess: false
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

        case HANDLE_NEWS_TYPE_CHANGE : {
            return{
                ...state,
                newsData: [{
                    ...state.newsData[0],
                    type: action.payload

                }]
            }
        }
        default: return state
    }
}

export default editNewsData;
