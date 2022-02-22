import dayNigthReduder from "./dayNigth";
import loggedReducer from "./isLogged";
import { articleReducer } from "./articleReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  dayNigth : dayNigthReduder,
  isLogged : loggedReducer,
  allArticles : articleReducer
})

export default allReducers;