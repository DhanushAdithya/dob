import React from 'react'
import { AppBar, Toolbar, Button, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
    color: {
        backgroundColor: '#F0DB4F',
        color: '#323330'
    },
    logo: {
        marginRight: 'auto'
    }
}))

const StyledButton = styled(Button)`
    margin: 0 0.6rem;
`
const StyledAvatar = styled(Avatar)`
    margin: 0 0 0 0.6rem;
    background-color: #323330;
`

export default () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.color}>
            <Toolbar>
                <Typography variant="h5" className={classes.logo}>Hello There</Typography>
                <StyledButton>Login</StyledButton>
                <StyledButton>Logout</StyledButton>
                <StyledAvatar alt="profile">DA</StyledAvatar>
            </Toolbar>
        </AppBar>
    )
}