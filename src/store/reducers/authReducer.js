const initialState = { redirect: false, err: '' }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			console.log('Succesfully signed in!')
			return { ...state, redirect: true }
		case 'SIGN_UP':
			console.log('Succesfully signed up!')
			return { ...state, redirect: true }
		case 'SIGN_OUT':
			console.log('Succesfully signed out!')
			return state
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
