
const initialState = {
  id:'',
  isFetching: false,
  payload:''
};


const transferIdStart = () => {
    return ({
        type: 'TransferStart' ,
        isFetching: false
    })
}
const transferId = (data) => {
    return ({
        type: 'TransferSuccess' ,
        isFetching: true,
        id: data.id,
        payload: data

    })
}

const transferIdAction = (id) => (dispatch, getState) => {
        dispatch(transferIdStart())        
        const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id.id)        
        dispatch(transferId(projData))
};

const transferIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TransferStart': {
      return {
        ...state,
        isFetching:false,
      }}
    case 'TransferSuccess': {
      return {
        ...state,
        id: action.id,
        projData: action.payload,
        isFetching: true,
      }}

    default:
      return state;
  }
};

module.exports = {transferIdAction, transferIdReducer};
