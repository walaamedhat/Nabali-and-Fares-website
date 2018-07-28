import {
    TRANSFER_ID_PROJECT_START,
    TRANSFER_ID_PROJECT_SUCCESS,
    TRANSFER_DATA_PROJECT_SUCCESS
} from '../../constants/actionTypes'

const initialState = {
    id:'',
    projectData:[],
    isFetching: false,
  };

const transferPorjectIdReducer = (state = initialState, action) => {
switch (action.type) {
    case TRANSFER_ID_PROJECT_START: {
    return {
        ...state,
        isFetching:true,
    }}
    case TRANSFER_ID_PROJECT_SUCCESS: {
    return {
        ...state,
        id: action.id,
        isFetching: false,
    }}
    case TRANSFER_DATA_PROJECT_SUCCESS:{
        return{
            ...state,
            projectData: action.payload,
            isFetching: false,    
        }
    }
    default:
    return state;
    }
};

export default transferPorjectIdReducer; 