import * as types from '../actions/actionTypes'

const reducer = (state, action) => {
  switch(action.type){
    case types.ACTIVE_PAGE:
      return Object.assign({}, state, {curPage: action.pageName})

    default:
      return state
  }
}

export default reducer
