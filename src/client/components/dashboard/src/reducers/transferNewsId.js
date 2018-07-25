
const initialState = {
  id:'',
  data:'',
  isFetching: false,
};


const transferIdStart = () => {
    return ({
        type: 'TransferStart' ,
    })
}
const transferId = (id) => {
    return ({
        type: 'TransferSuccess' ,
        payload: id,

    })
}
const transferData = (data) => {
    return ({
        type: 'TransferDataSuccess' ,
        payload: data,

    })
}

const transferIdAction = id => (dispatch,getState) => {
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
        id: action.payload.id,
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

module.exports = {transferIdAction, transferIdReducer};
