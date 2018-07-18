import {
  START_UPLOAD,
  SUCCESS_UPLOAD,
  FAILURE_UPLOAD
} from '../constants/actionTypes'

const uploadFetchStart = () => {
return {
  type: START_UPLOAD
};
};
const uploadFetchSuccess = (attr,data) => {
return {
  type: SUCCESS_UPLOAD,
  url: data,
  name: attr

};
};

const uploadFetchFailer = massage => {
return {
  type: FAILURE_UPLOAD,
  payload: massage
};
};



const upload = (attr, data) => dispatch => {
  dispatch(uploadFetchStart())
  fetch('http://localhost:8000/api/v1/upload', {
      method:"POST",
      body:data
    }).then((res) => {                    
       return res.json();
    })
    .then((body) =>{
      console.log(body, ' body')
      dispatch(uploadFetchSuccess(attr, body.url))
    }).catch(error => {console.error(`Fetch Error =\n`, error)
      console.log(error, ' eeeee ')
      dispatch(uploadFetchFailer(error))
      });
  }

  export default upload;