import {
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE
} from '../../constants/actionTypes'
import store from '../../store'

const intialState = {
    isFetching: false,
    error: undefined,
    massage: ''
}


const deleteProject = (state = intialState, action) => {    
    switch(action.type){        
        case DELETE_PROJECT_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case DELETE_PROJECT_SUCCESS :{            
            return{
                ...state,
                isFetching:false,
                massage: 'Delete Project Success'
            }
        }
        case DELETE_PROJECT_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                massage: 'Delete Project Faild, Try Again!!'
            }
        }
        default: return state
    }
}

export default deleteProject;
