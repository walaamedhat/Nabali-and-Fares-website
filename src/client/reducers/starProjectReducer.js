import {
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE
} from '../constants/actionTypes';

const initalState = {
    starProjects : [],
    error: undefined,
    isFetching: false
}

const projectsdata = (state = initalState , action)  => {
    switch(action.type){
        case GET_PROJECTS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_PROJECTS_SUCCESS :{
            return{
                ...state,
                starProjects:action.payload.data,
                isFetching:false
            }
        }
        case GET_PROJECTS_FAILURE :{
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
