import dayNigthReduder from "./dayNigth";
import loggedReducer from "./isLogged";
import { articleReducer } from "./articleReducer";
import { combineReducers } from "redux";
import { articlesQueryReducer } from "./articleQueryReducer";
// import { setQueryArticles } from "../actions/articleAction";

const allReducers = combineReducers({
  dayNigth : dayNigthReduder,
  isLogged : loggedReducer,
  allArticles : articleReducer,
  queryArticle: articlesQueryReducer

})

export default allReducers;