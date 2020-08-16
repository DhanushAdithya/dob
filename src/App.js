import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import { Navbar } from './components'

export default () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" component={() => <h1>Home</h1>} />
            </Switch>
        </Router>
    )
}