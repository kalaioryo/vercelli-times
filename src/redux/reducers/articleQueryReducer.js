import { ActionTypes } from "../constants/action-types";

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