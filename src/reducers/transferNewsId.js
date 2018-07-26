
const initialState = {
  id:'',
  data:'',
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
const transferData = (data) => {
    return ({
        type: 'TransferDataSuccess' ,
        payload: data,

    })
}

const transferIdProjectAction = (id) => (dispatch, getState) => {
        dispatch(transferIdStart())        
        const projData = getState().allProjects.projectsData.data.filter(elem => elem._id === id.id)        
        dispatch(transferId(projData))
}
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
        isFetching:false,
      }}
    case 'TransferSuccess': {
      return {
        ...state,
        id: action.id,
        projData: action.payload,
        isFetching: true,
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

module.exports = {transferIdProjectAction, transferIdNewsAction ,transferIdReducer};
