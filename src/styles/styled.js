import {
	Button,
	Avatar,
	TextField,
	Container,
	Paper,
	FormControl,
	Typography,
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
const StyledPaper = styled(Paper)`
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
const StyledContainer = styled(Container)`
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
	margin-top: 20px;
`
const StyledMonthCont = styled.div`
	margin: 0;
	padding: 0;
	margin-top: 100px;
	margin-bottom: 20px;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 25px 0;

	@media (max-width: 1470px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	@media (max-width: 995px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}

	@media (max-width: 790px) {
		margin-top: 20px;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}

	@media (max-width: 520px) {
		margin-top: 20px;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(12, 1fr);
	}
`
const StyledMonthWrapper = styled.div`
	padding: 15px;
	border-radius: 5px;
	background-color: #41423e;
	border: 1px solid white;
`
const StyledDetailCard = styled.div`
	padding: 5px;
	border: 1px solid grey;
	border-radius: 5px;
	margin: 10px 0;
`

const StyledHeading = styled(Typography)`
	font-family: 'Luckiest Guy', cursive;
`

export {
	StyledNavButton,
	StyledNavAvatar,
	StyledNavLink,
	StyledTextField,
	StyledSubmit,
	StyledContainer,
	StyledPaper,
	StyledSelect,
	StyledList,
	StyledUL,
	StyledMonthCont,
	StyledMonthWrapper,
	StyledDetailCard,
	StyledHeading,
}
