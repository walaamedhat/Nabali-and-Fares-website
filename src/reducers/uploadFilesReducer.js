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
    image360:'',
    isFetching: false,
    error: undefined,
    massage:''
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
                      massage : 'Upload Success'
                  }
              break;
            case 'image360Url': 
                  return{
                      ...state,
                      image360Url:action.url,
                      isFetching:false,
                      massage : 'Upload image 360degrees is Success'
                  }
              break;
          }
        }

        case FAILURE_UPLOAD :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                massage: 'Upload Faild'
            }
        }
        default: return state
    }
}

export default upload;
