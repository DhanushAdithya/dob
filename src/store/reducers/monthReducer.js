const initialState = {
	month: 'January',
	// prettier-ignore
	dates: [
        0, 1, 2, 3, 4, 3, 2,
        1, 2, 3, 4, 2, 2, 1,
        3, 3, 2, 4, 1, 0, 2,
        3, 4, 2, 0, 1, 4, 2,
        0, 1, 1,
    ]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_DATE':
			console.log('Succesfully added the date!')
			return state
		default:
			return state
	}
}
