import React from 'react'

import { StyledNavLink, StyledNavButton, StyledNavAvatar } from '../../styles/styled'

export default () => {
    return (
        <>
            <StyledNavLink to="/">
                <StyledNavButton variant="outlined">Logout</StyledNavButton>
            </StyledNavLink>
            <StyledNavLink to="/profile">
                <StyledNavAvatar alt="profile">DA</StyledNavAvatar>
            </StyledNavLink>
        </>
    )
}