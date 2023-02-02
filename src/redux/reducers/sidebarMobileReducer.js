import { ActionTypes } from "../constants/action-types";

const initialState = false;

const sidebarMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_SIDEBAR_MOBILE:
      return state = !state;
      
    case ActionTypes.CLOSE_SIDEBAR_MOBILE:
      return state = false;
  
    default:
      return state
  }
}

export default sidebarMobileReducer