export const addDate = date => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore()
		firestore.collection('months').add({
			...date,
		})
		dispatch({ type: 'ADD_DATE', date })
	}
}
