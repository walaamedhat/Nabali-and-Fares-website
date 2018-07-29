import {
    FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    DELETE_PROJECT_SUCCESS,
} from '../../constants/actionTypes'

const intialState = {
    projectsData:{},
    isFetching: false,
    error: undefined,
    message: ''
}


const getProjectsData = (state = intialState, action) => {
    switch(action.type){
        case FETCH_PROJECTS_START:{
            return{
                ...state,
                isFetching:true
            }
        }
        case FETCH_PROJECTS_SUCCESS :{            
            return{
                ...state,
                projectsData:action.payload,
                isFetching:false,
                message: 'Get News Success'
            }
        }
        case FETCH_PROJECTS_FAILURE :{
            return{
                ...state,
                error: action.error,
                isFetching: false,
                message: 'Get News Faild, Try Again!!'
            }
        }
        case DELETE_PROJECT_SUCCESS : {
            return action.payload
        }
        default: return state
    }
}

export default getProjectsData;