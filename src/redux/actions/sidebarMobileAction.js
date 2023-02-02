import { ActionTypes } from "../constants/action-types";

export const switchSidebarMobile = () => {
  return {
    type: ActionTypes.SWITCH_SIDEBAR_MOBILE
  };
}

export const closeSidebarMobile = () => {
  return {
    type: ActionTypes.CLOSE_SIDEBAR_MOBILE
  }
} 