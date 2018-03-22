import * as types from './types'
export const test = () => dispatch => {
	dispatch({
		type: types.TEST
	})
}