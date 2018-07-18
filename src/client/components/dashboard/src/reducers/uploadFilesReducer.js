import {
    START_UPLOAD,
    SUCCESS_UPLOAD,
    FAILURE_UPLOAD
} from '../constants/actionTypes';
import { log } from 'util';

const intialState = {
    url:null,
    isFetching: false,
    error: undefined,
    message:''
}


const upload = (state = intialState, action) => {    
    switch(action.type){
        case START_UPLOAD:{
            return{
                ...state,
                isFetching:true
            }
        }
        case SUCCESS_UPLOAD :{
            return{
                ...state,
                url:action.payload,
                isFetching:false,
                message: 'Upload Success!'
            }
        }
        case FAILURE_UPLOAD :{            
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Upload Failed'
            }
        }
        default: return state
    }
}

export default upload;