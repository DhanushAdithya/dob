import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'

import App from './App'
import './styles/style.scss'
import { rootReducer } from './store/reducers'
import firebase from './config/firebase'
import * as serviceWorker from './serviceWorker'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase),
		reactReduxFirebase(firebase, {
			useFirestoreForProfile: true,
			userProfile: 'users',
			attachAuthIsReady: true,
		})
	)
)
const root = document.getElementById('root')

store.firebaseAuthIsReady.then(() => {
	render(
		<StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</StrictMode>,
		root
	)
	serviceWorker.register()
})
