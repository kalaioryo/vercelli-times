import dayNigthReduder from "./dayNigth";
import loggedReducer from "./isLogged";
import { articleReducer } from "./articleReducer";
import { combineReducers } from "redux";
import { articlesQueryReducer } from "./articleQueryReducer";
import { singleArticleReducer } from "./singleArticleReducer";

const allReducers = combineReducers({
  dayNigth : dayNigthReduder,
  isLogged : loggedReducer,
  allArticles : articleReducer,
  queryArticle: articlesQueryReducer,
  singleArticle: singleArticleReducer
})

export default allReducers;