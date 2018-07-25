import {
    GET_PROJECT_DATA_START,
    GET_PROJECT_DATA_SUCCESS,
    GET_PROJECT_DATA_FAILURE
} from '../constants/actionTypes';



const initalState = {
    projectData : [],
    error: undefined,
    isFetching: false
}

const projectsdata = (state = initalState , action)  => {
    switch(action.type){
        case GET_PROJECT_DATA_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case GET_PROJECT_DATA_SUCCESS :{
            return{
                ...state,
                projectData:action.payload.data,
                isFetching:false
            }
        }
        case GET_PROJECT_DATA_FAILURE :{
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
