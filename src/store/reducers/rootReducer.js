import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import { authReducer, monthReducer } from '../reducers'

const rootReducer = combineReducers({
	auth: authReducer,
	month: monthReducer,
	firestore: firestoreReducer,
})

export default rootReducer
