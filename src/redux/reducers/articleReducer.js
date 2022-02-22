import { ActionTypes } from "../contants/action-tipes";

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