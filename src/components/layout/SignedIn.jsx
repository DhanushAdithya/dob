import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    margin: 0 0.6rem;
`
const StyledAvatar = styled(Avatar)`
    margin: 0 0 0 0.6rem;
    background-color: #323330ee;
`
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`

export default () => {
    return (
        <>
            <NavLink to="/">
                <StyledButton variant="outlined">Logout</StyledButton>
            </NavLink>
            <StyledNavLink to="/profile">
                <StyledAvatar alt="profile">DA</StyledAvatar>
            </StyledNavLink>
        </>
    )
}