import { ActionTypes } from "../constants/action-types"

export const setArticles = (articles) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  }
}

export const setQueryArticles = (articles) =>{
  return {
    type: ActionTypes.SET_ARTICLES_QUERY,
    payload: articles
  }
}