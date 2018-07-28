
const initialState = {
  id:'',
  data:'',
  isFetching: false,
  payload:''
};


const transferIdStart = () => {
    return ({
        type: 'TransferStart' ,
    })
}
const transferId = (data) => {
    return ({
        type: 'TransferSuccess' ,
        id: data.id,
        payload: data

    })
}
const transferData = (data) => {
    return ({
        type: 'TransferDataSuccess' ,
        payload: data,

    })
}

// const transferIdProjectAction = (id) => (dispatch, getState) => {
//         dispatch(transferIdStart())        
//         const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id.id)        
//         dispatch(transferId(id.id))
//         dispatch(transferData(projData))
// }
const transferIdNewsAction = id => (dispatch,getState) => {
        dispatch(transferIdStart())
        dispatch(transferId(id))
        const data = getState().allNews.newsData.data.filter(e => e._id === id.id);
        dispatch(transferData(data))
};

const transferIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TransferStart': {
      return {
        ...state,
        isFetching:true,
      }}
    case 'TransferSuccess': {
      return {
        ...state,
        id: action.id,
        isFetching: false,
      }}
    case 'TransferDataSuccess': {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }}

    default:
      return state;
  }
};

module.exports = {transferIdNewsAction ,transferIdReducer};
