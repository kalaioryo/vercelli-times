import { ActionTypes } from "../contants/action-tipes";

// const initialState = false;
const storiedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  
const defaultDark =
  storiedTheme === "dark" || (storiedTheme === null && prefersDark);

const initialState = defaultDark || false;

const themeModeReducer = (state = initialState, action) => {
  switch(action.type){
    case ActionTypes.SET_DARK_MODE :
      return state = true;

    case ActionTypes.SET_LIGHT_MODE :
      return state = false;
    
    default :
      return state;
  }
}

export default themeModeReducer;