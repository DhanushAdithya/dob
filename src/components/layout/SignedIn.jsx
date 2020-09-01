import React from 'react'

import {
	StyledNavLink,
	StyledNavButton,
	StyledNavAvatar,
} from '../../styles/styled'
import { signOut } from '../../store/actions/authUser'
import { connect } from 'react-redux'

const SignedIn = ({ signOut }) => {
	return (
		<>
			<StyledNavLink to='/create'>
				<StyledNavButton variant='outlined'>Create</StyledNavButton>
			</StyledNavLink>
			<StyledNavLink to='/' onClick={signOut}>
				<StyledNavButton variant='outlined'>Logout</StyledNavButton>
			</StyledNavLink>
			<StyledNavLink to='/profile'>
				<StyledNavAvatar alt='profile'>DA</StyledNavAvatar>
			</StyledNavLink>
		</>
	)
}

const mapStateToProps = state => {
	console.log(state)
}

const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn)
