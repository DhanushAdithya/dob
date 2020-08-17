import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SignedIn, SignedOut } from '../layout'

const useStyles = makeStyles(theme => ({
	color: {
		backgroundColor: '#F0DB4F',
		color: '#323330',
	},
	logo: {
		marginRight: 'auto',
	},
}))

export default () => {
	const classes = useStyles()

	return (
		<AppBar className={classes.color} position='static'>
			<Toolbar>
				<Typography variant='h5' className={classes.logo}>
					Hello There
				</Typography>
				<SignedOut />
				<SignedIn />
			</Toolbar>
		</AppBar>
	)
}
