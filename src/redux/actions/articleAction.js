import { ActionTypes } from "../contants/action-tipes"

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

export const selectArticles = (articles) => {
  return {
    type: ActionTypes.SELECT_ARTICLE,
    payload: articles,
  }
}

export const dayNight = () => {
  return {
    type: 'DAYNIGTH'
  };
} 
// export const removeSelectArticles = (articles) => {
//   return {
//     type: ActionTypes.REMOVE_SELECT_ARTICLES,
//     payload: articles,
//   }
// }