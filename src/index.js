import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import './styles/style.scss'
import { rootReducer } from './store/reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer)
const root = document.getElementById('root')

render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	root
)

serviceWorker.unregister()
