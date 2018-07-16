import {
    PROJECTS_FETCH_START,
    PROJECTS_FETCH_SUCCESS,
    PROJECTS_FETCH_FAILURE
} from '../constants/actionTypes';

const initalState = {
    projectData : [],
    error: undefined,
    isFetching: false
}

const projectsdata = (state = initalState , action)  => {
    switch(action.type){
        case PROJECTS_FETCH_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case PROJECTS_FETCH_SUCCESS :{
            return{
                ...state,
                projectData:action.payload,
                isFetching:false
            }
        }
        case PROJECTS_FETCH_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: return state
    }
}

export default projectsdata;