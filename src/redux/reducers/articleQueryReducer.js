import { ActionTypes } from "../contants/action-tipes";

const initialState = {
  articles: []
}

export const articlesQueryReducer = (state = initialState, {type, payload}) =>{
  switch (type) {

    case ActionTypes.SET_ARTICLES_QUERY:
      return {...state, articles: payload}

    default:
      return state
  }
}