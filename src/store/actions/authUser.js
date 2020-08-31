export const signIn = ({ email, password }) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => dispatch({ type: 'SIGN_IN' }))
	}
}

export const signUp = ({ email, password }) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase()
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => dispatch({ type: 'SIGN_UP' }))
	}
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signOut()
            .then(() => dispatch({ type: 'SIGN_OUT' }))
    }
}
