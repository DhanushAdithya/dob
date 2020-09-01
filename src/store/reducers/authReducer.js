const initialState = { redirect: false }

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
		default:
			return state
	}
}
