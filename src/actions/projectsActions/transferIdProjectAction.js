import {
    TRANSFER_ID_PROJECT_START,
    TRANSFER_ID_PROJECT_SUCCESS,
    TRANSFER_DATA_PROJECT_SUCCESS,
    HANDLE_INPUT_CHANGE,
    TRANSFER_DATA_PROJECT_TO_EDIT
} from '../../constants/actionTypes'

const transferIdProjectStart = () =>{
    return {
        type: TRANSFER_ID_PROJECT_START
    };
}

const transferIdProjectSuccess = (id) => {
    console.log(id, 'project id inside action');
    
    return ({
        type: TRANSFER_ID_PROJECT_SUCCESS,
        id: id,
    })
}

const transferDataProjectSuccess = (projectData) => {
    return({
        type: TRANSFER_DATA_PROJECT_SUCCESS,
        payload: projectData
    })
}


export const handleInputChange = (inputDtat) =>{
    console.log(inputDtat, ' hey , it is inputdata inside tranfer actio');
    
    return({
        type: HANDLE_INPUT_CHANGE,
        payload: inputDtat
    })
}
export const transferIdProjectAction = (id) => (dispatch, getState) => {
    dispatch(transferIdProjectStart())  
    dispatch(transferIdProjectSuccess(id))      
    const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id)        
    dispatch(transferDataProjectSuccess(projData))

}

