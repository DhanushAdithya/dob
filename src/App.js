import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import { Navbar } from './components/layout'

export default () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/signin" component={() => <h1>Sign In</h1>} />
                <Route path="/signup" component={() => <h1>Sign Up</h1>} />
                <Route path="/" component={() => <h1>Home</h1>} />
            </Switch>
        </Router>
    )
}