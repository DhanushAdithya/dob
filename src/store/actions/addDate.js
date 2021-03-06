export const addDate = ({ month, date, user }) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore()
		firestore
			.collection('months')
			.doc(month)
			.get()
			.then(doc => {
				let datesArray = doc.data().dates
				datesArray[+date - 1] = datesArray[+date - 1] + 1
				return datesArray
			})
			.then(data => {
				firestore.collection('months').doc(month).update({
					dates: data,
				})
			})
		firestore
			.collection('users')
			.doc(user.id)
			.update({
				isAdded: true,
			})
			.then(() => dispatch({ type: 'ADD_DATE', date }))
	}
}
