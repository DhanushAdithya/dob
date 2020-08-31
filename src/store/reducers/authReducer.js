const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			console.log('Succesfully signed in!')
			return state
		case 'SIGN_UP':
			console.log('Succesfully signed up!')
			return state
		case 'SIGN_OUT':
			console.log('Succesfully signed out!')
			return state
		default:
			return state
	}
}
