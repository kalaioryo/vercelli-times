import { ActionTypes } from "../contants/action-tipes";

const initialState = false;

const siderbarModileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_SIDERBAR_MOBILE:
      return state = !state;
      
    case ActionTypes.CLOSE_SIDERBAR_MOBILE:
      return state = false;
  
    default:
      return state
  }
}

export default siderbarModileReducer