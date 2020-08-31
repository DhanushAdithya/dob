import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import { authReducer, monthReducer } from '../reducers'

const rootReducer = combineReducers({
	auth: authReducer,
	month: monthReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
})

export default rootReducer
