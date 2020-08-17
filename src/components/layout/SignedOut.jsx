import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    margin: 0 0.6rem;
`

export default () => {
    return (
        <>
            <NavLink to="/signup">
                <StyledButton variant="outlined">Sign Up</StyledButton>
            </NavLink>
            <NavLink to="/signin">
                <StyledButton variant="outlined">Sign In</StyledButton>
            </NavLink>
        </>
    )
}