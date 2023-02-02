import { ActionTypes } from "../constants/action-types";

export const darkMode = () => {
  return {
    type: ActionTypes.SET_DARK_MODE
  };
} 

export const lightMode = () => {
  return {
    type: ActionTypes.SET_LIGHT_MODE
  };
}