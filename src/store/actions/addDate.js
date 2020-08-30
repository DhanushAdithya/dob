export const addDate = date => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore()
		firestore.collection('months').add({
			...date,
		}).then(() => {
            dispatch({ type: 'ADD_DATE', date })
        })
	}
}
