import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import './styles/style.scss'
import * as serviceWorker from './serviceWorker'

const root = document.getElementById('root')

render(
	<StrictMode>
		<App />
	</StrictMode>,
	root
)

serviceWorker.unregister()
