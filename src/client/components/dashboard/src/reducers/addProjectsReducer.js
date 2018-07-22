import {
    ADDING_PROJECT_START,
    ADDING_PROJECT_SUCCESS,
    ADDING_PROJECT_FAILURE
} from '../constants/actionTypes'

const intialState = {
    projectData:{},
    isFetching: false,
    error: undefined
}


const addProjectData = (state = intialState, action) => {
    switch(action.type){
        case ADDING_PROJECT_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case ADDING_PROJECT_SUCCESS :{
            return{
                ...state,
                projectData:action.payload,
                isFetching:false
            }
        }
        case ADDING_PROJECT_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default addProjectData;