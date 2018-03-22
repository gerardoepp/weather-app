import * as types from '../actions/types'
import createReducer from '../utils/createReducer'

const initialState = {
    test: 'test'
}

export default createReducer(initialState, {
    [types.TEST]: (state, action) => ({ ...state})
  })
  