import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/layout'
import { SignUp, SignIn } from './components/auth'
import { Create, MonthContainer } from './components/months'
import { Profile, Home } from './components/pages'

export default () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/signin' component={() => <SignIn />} />
				<Route path='/signup' component={() => <SignUp />} />
				<Route path='/profile' component={() => <Profile />} />
				<Route path='/months' component={() => <MonthContainer />} />
				<Route path='/create' component={() => <Create />} />
				<Route path='/' component={() => <Home />} />
			</Switch>
		</Router>
	)
}
