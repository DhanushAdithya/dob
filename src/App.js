import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={() => <h1>Home</h1>} />
            </Switch>
        </Router>
    )
}