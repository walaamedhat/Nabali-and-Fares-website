import {
    ADDING_PROJECT_START,
    ADDING_PROJECT_SUCCESS,
    ADDING_PROJECT_FAILURE
} from '../../constants/actionTypes'

const projectFetchStart = () =>{
    return {
        type: ADDING_PROJECT_START
    };
}

const projectFetchSuccess = (projectData) => {
    return ({
        type: ADDING_PROJECT_SUCCESS,
        payload: projectData
    })
}

const projectFetchFailure = (err) => {
    return ({
        type: ADDING_PROJECT_FAILURE,
        error: err
    })
}

const AddProject = (data) => (dispatch, getState) => {

    data.image360Url = getState().filesUrl.image360Url;
    data.videoUrl = getState().filesUrl.video
    data.images = getState().filesUrl.secondaryImages;
    data.projectFile = getState().filesUrl.projectFile;

    let obj = {
        address : [
        data.street,
        data.district,
        data.city
        ]
    }
    const newdata = Object.assign(data,  obj);
    
    dispatch(projectFetchStart());
    
    fetch('https://nabaliandfares.herokuapp.com/api/v1/addProject', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify(newdata)
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        dispatch(projectFetchSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(projectFetchFailure(error))
    });
};

export default AddProject;
