import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { signIn } from '../../store/actions/authUser'
import { useState } from 'react'

const SignIn = ({ signIn }) => {
	const [user, setUser] = useState({ email: '', password: '' })
	const updateUser = e => setUser({ ...user, [e.target.id]: e.target.value })

	return (
		<ThemeProvider theme={Formtheme}>
			<StyledFormContainer maxWidth='sm'>
				<StyledFormPaper
					component='form'
					onSubmit={e => {
						e.preventDefault()
						signIn(user)
					}}
				>
					<Typography variant='h4' align='center'>
						Sign In
					</Typography>
					<StyledTextField
						label='Email'
						id='email'
						onChange={updateUser}
						value={user.email}
						fullWidth
					/>
					<StyledTextField
						label='Password'
						id='password'
						onChange={updateUser}
						value={user.password}
						type='password'
						fullWidth
					/>
					<StyledSubmit color='primary' variant='outlined'>
						Login
					</StyledSubmit>
				</StyledFormPaper>
			</StyledFormContainer>
		</ThemeProvider>
	)
}

const mapStateToProps = state => {
    console.log(state)
}

const mapDispatchToProps = dispatch => ({
	signIn: user => dispatch(signIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
