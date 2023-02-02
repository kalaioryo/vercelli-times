import { ActionTypes } from "../constants/action-types";

const initialState = {
  articles: []
}

export const articleReducer = (state = initialState, {type, payload}) =>{
  switch (type) {

    case ActionTypes.SET_ARTICLES:
      return {...state, articles: payload}

    default:
      return state
  }
}