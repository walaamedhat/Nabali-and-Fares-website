import {
    TRANSFER_ID_PROJECT_START,
    TRANSFER_ID_PROJECT_SUCCESS,
    TRANSFER_DATA_PROJECT_SUCCESS
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

const transferIdProjectAction = (id) => (dispatch, getState) => {
    dispatch(transferIdProjectStart())  
    dispatch(transferIdProjectSuccess(id))      
    const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id)        
    console.log(projData, 'project data in transfer action');
    
    dispatch(transferDataProjectSuccess(projData))

}

export default transferIdProjectAction;
