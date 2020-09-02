const initialState = { redirect: false, err: '' }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return { err: '', redirect: true }
		case 'SIGN_UP':
			return { err: '', redirect: true }
		case 'SIGN_OUT':
			return { err: '', redirect: false }
		case 'SIGN_IN_ERROR':
			return { ...state, err: action.err }
		case 'SIGN_UP_ERROR':
			return { ...state, err: action.err }
		case 'SIGN_OUT_ERROR':
			return { ...state, err: action.err }
		default:
			return state
	}
}
