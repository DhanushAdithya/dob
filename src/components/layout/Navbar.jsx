import React from 'react'
import { AppBar, Toolbar, Typography, Icon } from '@material-ui/core'
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

const Navbar = ({ auth, user }) => {
	const classes = useStyles()

	return (
		<AppBar className={classes.color} position='static'>
			<Toolbar>
				<StyledNavLink to='/' className={classes.logo}>
					<Typography
						variant='h5'
						style={{ display: 'flex', alignItems: 'center' }}
					>
						<Icon
							fontSize='large'
							style={{ paddingRight: 2, marginBottom: 2 }}
						>
							child_care
						</Icon>
						DOB
					</Typography>
				</StyledNavLink>
				{auth && auth ? <SignedIn profile={user} /> : <SignedOut />}
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = state => ({
	auth: state.firebase.auth.uid,
	user: state.firebase.profile,
})

export default connect(mapStateToProps, null)(Navbar)
