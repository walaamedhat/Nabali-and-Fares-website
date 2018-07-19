import {
    START_UPLOAD,
    SUCCESS_UPLOAD,
    FAILURE_UPLOAD
} from '../constants/actionTypes';
import { log } from 'util';

const intialState = {
    mainImage:'',
    secondaryImages:'',
    video:'',
    isFetching: false,
    error: undefined,
    message:''
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
          var data;
          switch (action.name) {
            case 'mainImage':
                return{
                    ...state,
                    mainImage:action.url,
                    isFetching:false,
                    message : 'Upload Success'
                }
              break;
            case 'secondaryImages':
                  return{
                      ...state,
                      secondaryImages:action.url,
                      isFetching:false,
                      message : 'Upload Success'
                  }
              break;
            case 'video':
                  return{
                      ...state,
                      video:action.url,
                      isFetching:false,
                      message : 'Upload Success'
                  }
              break;

          }

        }
        case FAILURE_UPLOAD :{
            console.log(action.error,'err in reducer');

            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Upload Faild'
            }
        }
        default: return state
    }
}

export default upload;
