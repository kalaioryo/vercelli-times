import loggedReducer from "./isLogged";
import { articleReducer } from "./articleReducer";
import { combineReducers } from "redux";
import { articlesQueryReducer } from "./articleQueryReducer";
import { singleArticleReducer } from "./singleArticleReducer";
import themeModeReducer from "./themeModeReducer";
import siderbarModileReducer from "./siderbarMobileReducer";

const allReducers = combineReducers({
  themeMode : themeModeReducer,
  isLogged : loggedReducer,
  allArticles : articleReducer,
  queryArticle: articlesQueryReducer,
  singleArticle: singleArticleReducer,
  siderbarMobile: siderbarModileReducer
})

export default allReducers;