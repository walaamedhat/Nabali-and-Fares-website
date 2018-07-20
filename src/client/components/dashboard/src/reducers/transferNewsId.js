
const initialState = {
  id:'',
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

const transferIdAction = (id) => dispatch => {
        dispatch(transferIdStart())
        dispatch(transferId(id))
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

    default:
      return state;
  }
};

module.exports = {transferIdAction, transferIdReducer};
