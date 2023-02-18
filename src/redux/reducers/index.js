import loggedReducer from "./isLogged";
import { articleReducer } from "./articleReducer";
import { combineReducers } from "redux";
import { articlesQueryReducer } from "./articleQueryReducer";
import themeModeReducer from "./themeModeReducer";
import sidebarMobileReducer from "./sidebarMobileReducer";

const allReducers = combineReducers({
  themeMode : themeModeReducer,
  isLogged : loggedReducer,
  allArticles : articleReducer,
  queryArticle: articlesQueryReducer,
  sidebarMobile: sidebarMobileReducer
})

export default allReducers;