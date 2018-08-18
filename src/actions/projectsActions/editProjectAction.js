import {
    EDIT_PROJECT_START,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_FAILURE,
    
} from '../../constants/actionTypes'

const editProjectStart = () =>{
    return {
        type: EDIT_PROJECT_START
    };
}

const editProjectSuccess = (newsData) => {
    return ({
        type: EDIT_PROJECT_SUCCESS,
        payload: newsData
    })
}

const editProjectFailure = (err) => {
    return ({
        type: EDIT_PROJECT_FAILURE,
        error: err
    })
}

const editProject = data => (dispatch, getState)=> {
    // if(data.images.length === 0 && getState().filesUrl.secondaryImages ===null){
    //     data.images = data.projData.images
    // }
    // else if (getState().filesUrl.secondaryImages){
    //     data.images = getState().filesUrl.secondaryImages;
    // }else{
    // }
    console.log(data,' data is here');
    
    
    dispatch(editProjectStart())
    fetch('https://nabaliandfares.herokuapp.com/api/v1/editProject', {
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
        console.log(res, ' res is here');
        
        dispatch(editProjectSuccess(res))
    })
    .catch(error => {console.error(`Fetch Error =\n`, error)
        dispatch(editProjectFailure(error))
    });
    dispatch(editProjectFailure())
    
};

export default editProject;
