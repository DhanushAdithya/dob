import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

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

const Navbar = ({ auth }) => {
	const classes = useStyles()

	return (
		<AppBar className={classes.color} position='static'>
			<Toolbar>
				<StyledNavLink to='/' className={classes.logo}>
					<Typography variant='h5'>Hello There</Typography>
				</StyledNavLink>
				{auth && auth ? <SignedIn /> :<SignedOut />}
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth.uid
})

export default connect(mapStateToProps, null)(Navbar)