import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/layout'
import { SignUp } from './components/auth'

export default () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/signin' component={() => <h1>Sign In</h1>} />
				<Route path='/signup' component={() => <SignUp />} />
				<Route path='/profile' component={() => <h1>Profile</h1>} />
				<Route path='/' component={() => <h1>Home</h1>} />
			</Switch>
		</Router>
	)
}
