import React from 'react'

import { StyledNavLink, StyledNavButton } from '../../styles/styled'

export default () => {
	return (
		<>
			<StyledNavLink to='/signup'>
				<StyledNavButton variant='outlined'>Sign Up</StyledNavButton>
			</StyledNavLink>
			<StyledNavLink to='/signin'>
				<StyledNavButton variant='outlined'>Sign In</StyledNavButton>
			</StyledNavLink>
		</>
	)
}
