import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<div>
			<h1 children='Home' />
			<p>Go to the month chart</p>
			<Link to='/months' children='GO!!' />
		</div>
	)
}
