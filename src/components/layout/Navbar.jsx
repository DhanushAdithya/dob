import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { StyledNavLink } from '../../styles/styled'
import { SignedIn, SignedOut } from '../layout'

const useStyles = makeStyles(theme => ({
	color: {
		backgroundColor: '#F0DB4F',
		color: '#323330',
	},
	logo: {
		marginRight: 'auto',
		color: '#323330',
	},
}))

export default () => {
	const classes = useStyles()

	return (
		<AppBar className={classes.color} position='static'>
			<Toolbar>
				<StyledNavLink to='/' className={classes.logo}>
					<Typography variant='h5'>Hello There</Typography>
				</StyledNavLink>
				<SignedOut />
				<SignedIn />
			</Toolbar>
		</AppBar>
	)
}
