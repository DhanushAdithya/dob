export const addDate = date => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
		firestore
			.collection('months')
			// .add()
			// .then(() => dispatch({ type: 'ADD_DATE', date }))
	}
}
