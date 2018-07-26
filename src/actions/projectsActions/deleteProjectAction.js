import {
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE
} from '../../constants/actionTypes'


const deleteProjectStart = () =>{
    return {
        type: DELETE_PROJECT_START
    };
}

const deleteProjectSuccess = (newData) => {
    return ({
        type: DELETE_PROJECT_SUCCESS,
        payload: newData
    })
}

const deleteProjectFailure = (err) => {
    return ({
        type: DELETE_PROJECT_FAILURE,
        error: err
    })
}

const DeleteProject = data => (dispatch, getState)=> {
    const {allProjects} = getState()
    dispatch(deleteProjectStart())
    fetch('http://localhost:8000/api/v1/deleteProjects', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
        },
        body: JSON.stringify(data)
    }).then(response =>{
       return response.json()
    })
    .then(res => {
        console.log(data, ' data is here');
        allProjects.projectsData.data = allProjects.projectsData.data.filter(elem => elem._id !== data.id )
        dispatch(deleteProjectSuccess(allProjects))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(deleteProjectFailure(error))
    });
};

export default DeleteProject;
