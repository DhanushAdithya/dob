const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DATE':
			console.log('Succesfully added the date!')
			return state
		default:
			return state
	}
}
