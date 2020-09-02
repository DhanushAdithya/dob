import React from 'react'
import { connect } from 'react-redux'
import { Snackbar } from '@material-ui/core'

import {
	StyledNavLink,
	StyledNavButton,
	StyledNavAvatar,
} from '../../styles/styled'
import { signOut } from '../../store/actions/authUser'

const SignedIn = ({ signOut, err, profile }) => {
	return (
		<>
			<StyledNavLink to='/create'>
				<StyledNavButton variant='outlined'>Create</StyledNavButton>
			</StyledNavLink>
			<StyledNavLink to='/' onClick={signOut}>
				<StyledNavButton variant='outlined'>Logout</StyledNavButton>
			</StyledNavLink>
			<StyledNavLink to='/profile'>
				<StyledNavAvatar alt='profile'>{profile.initials}</StyledNavAvatar>
			</StyledNavLink>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={err ? true : false}
				message={err}
			/>
		</>
	)
}

const mapStateToProps = state => ({
	err: state.auth.err,
})

const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn)
