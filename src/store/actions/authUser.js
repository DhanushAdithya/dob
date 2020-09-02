export const signIn = ({ email, password }) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => dispatch({ type: 'SIGN_IN' }))
			.catch(err => dispatch({ type: 'SIGN_IN_ERROR', err: err.message }))
	}
}

export const signUp = ({ name, email, password }) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase()
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				const firestore = getFirestore()
				firestore
					.collection('users')
					.doc(user.uid)
					.set({
						name,
						email,
						initials: name
							.split(' ')
							.map(_ => _[0])
							.join(''),
					})
			})
			.then(() => dispatch({ type: 'SIGN_UP' }))
			.catch(err => dispatch({ type: 'SIGN_UP_ERROR', err: err.message }))
	}
}

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()
		firebase
			.auth()
			.signOut()
			.then(() => dispatch({ type: 'SIGN_OUT' }))
			.catch(err => dispatch({ type: 'SIGN_OUT_ERROR', err: err.message }))
	}
}
