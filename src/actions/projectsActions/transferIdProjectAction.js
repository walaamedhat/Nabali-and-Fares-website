import {
    TRANSFER_ID_PROJECT_START,
    TRANSFER_ID_PROJECT_SUCCESS,
    TRANSFER_DATA_PROJECT_SUCCESS,
    HANDLE_INPUT_CHANGE,
    CHANGE_CHECKED_VALUE
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

export const handleStarValue = (checkedVaule) =>{
    return({
        type: CHANGE_CHECKED_VALUE,
        payload: checkedVaule
    })
}

export const handleInputChange = (inputDtat) =>{    
    return({
        type: HANDLE_INPUT_CHANGE,
        payload: inputDtat
    })
}

export const transferIdProjectAction = (id) => (dispatch, getState) => {
    dispatch(transferIdProjectStart())  
    dispatch(transferIdProjectSuccess(id))      
    const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id)  
    const newAddress = {
        city : projData[0].address[2],
        district : projData[0].address[1],
        street : projData[0].address[0]
    }
    const newProjectData = Object.assign(projData[0], newAddress);
    dispatch(transferDataProjectSuccess([newProjectData]))

}

