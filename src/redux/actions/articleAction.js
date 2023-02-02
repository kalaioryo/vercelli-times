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

export const setSingleArticle = (article) =>{
  return {
    type: ActionTypes.SET_SINGLE_ARTICLE,
    payload: article
  }
}


// export const selectArticles = (articles) => {
//   return {
//     type: ActionTypes.SELECT_ARTICLE,
//     payload: articles,
//   }
// }


// export const removeSelectArticles = (articles) => {
//   return {
//     type: ActionTypes.REMOVE_SELECT_ARTICLES,
//     payload: articles,
//   }
// }