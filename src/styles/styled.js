import { Button, Avatar, TextField, Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavButton = styled(Button)`
	margin: 0 0.6rem;
`
const StyledNavAvatar = styled(Avatar)`
	margin: 0 0 0 0.6rem;
	background-color: #323330ee;
`
const StyledNavLink = styled(NavLink)`
	text-decoration: none;
`
const StyledTextField = styled(TextField)`
	margin: 15px 10px;
	text-align: center;
`
const StyledSubmit = styled(Button)`
    margin: 15px 10px;
`
const StyledFormContainer = styled(Container)`
    margin-top: 100px;
`

export {
	StyledNavButton,
	StyledNavAvatar,
	StyledNavLink,
	StyledTextField,
    StyledSubmit,
    StyledFormContainer
}
