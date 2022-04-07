import { ActionTypes } from "../contants/action-tipes";

const initialState = {
  article: []
}

export const singleArticleReducer = (state = initialState, {type,payload}) =>{
  switch (type) {

    case ActionTypes.SET_SINGLE_ARTICLE:
      return {...state, article: payload}

    default:
      return state
  }
} 