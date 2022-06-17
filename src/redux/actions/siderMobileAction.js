import { ActionTypes } from "../contants/action-tipes";

export const switchSiderbarMobile = () => {
  return {
    type: ActionTypes.SWITCH_SIDERBAR_MOBILE
  };
}

export const closeSiderbarMobile = () => {
  return {
    type: ActionTypes.CLOSE_SIDERBAR_MOBILE
  }
} 