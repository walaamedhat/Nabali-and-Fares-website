import {
    START_UPLOAD,
    SUCCESS_UPLOAD,
    FAILURE_UPLOAD
} from '../constants/actionTypes';
import { log } from 'util';

const intialState = {
    url:null,
    isFetching: false,
    error: undefined
}


const upload = (state = intialState, action) => {
    console.log(action, ' action');
    
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
                isFetching:false
            }
        }
        case FAILURE_UPLOAD :{
            console.log(action.error,'err in reducer');
            
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default upload;