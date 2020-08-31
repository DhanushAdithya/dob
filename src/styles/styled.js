import {
	Button,
	Avatar,
	TextField,
	Container,
	Paper,
	FormControl,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavButton = styled(Button)`
	margin: 0 0.6rem;
	color: #323330;
`
const StyledNavAvatar = styled(Avatar)`
	margin: 0 0 0 0.6rem;
	background-color: #323330ee;
`
const StyledNavLink = styled(NavLink)`
	text-decoration: none;
`
const StyledFormPaper = styled(Paper)`
	margin: 0;
	padding: 15px;
`
const StyledTextField = styled(TextField)`
	margin: 15px 0;
`
const StyledSubmit = styled(Button).attrs(_ => ({
	type: 'submit',
}))`
	margin: 15px 0;
`
const StyledFormContainer = styled(Container)`
	margin-top: 100px;
`
const StyledSelect = styled(FormControl)`
	margin: 15px 0;
`
const StyledList = styled.li`
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ shade }) => (shade ? shade : '#f8eda7')};
`
const StyledUL = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 25px);
	grid-template-rows: repeat(5, 25px);
	gap: 5px;
	list-style: none;
	margin: 0;
	padding: 0;
	margin-top: 30px;
	margin-left: 30px;
`

export {
	StyledNavButton,
	StyledNavAvatar,
	StyledNavLink,
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
	StyledSelect,
	StyledList,
	StyledUL,
}
