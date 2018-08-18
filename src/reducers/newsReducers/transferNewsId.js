import {
  HANDLE_NEWS_TYPE_CHANGE
} from '../../constants/actionTypes'

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
const transferId = (id) => {
    return ({
        type: 'TransferSuccess' ,
        id

    })
}
const transferData = (data) => {
    return ({
        type: 'TransferDataSuccess' ,
        payload: data,

    })
}
export const handelNewsInputsChange = input => { 
  return({
    type :'HANDEL_NEWS_INPUTS_CHANGE',
     payload: input
    }
  )
}

export const transferIdNewsAction = id => (dispatch,getState) => {
        dispatch(transferIdStart())
        dispatch(transferId(id))
        const data = getState().allNews.newsData.data.filter(e => e._id === id);        
        dispatch(transferData(data))
};

export const handleNewsTypeChange = data => {
  return({
    type : HANDLE_NEWS_TYPE_CHANGE,
    payload: data
  })
}

export const transferIdReducer = (state = initialState, action) => {
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
        isFetching: false
      }}
    default:
      return state;
  }
};
