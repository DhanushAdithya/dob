import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { signIn } from '../../store/actions/authUser'

const SignIn = ({ signIn, redirect }) => {
	const [user, setUser] = useState({ email: '', password: '' })
	const updateUser = e => setUser({ ...user, [e.target.id]: e.target.value })

	if (redirect) return <Redirect to='/' />

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

const mapStateToProps = state => ({
	redirect: state.auth.redirect,
})

const mapDispatchToProps = dispatch => ({
	signIn: user => dispatch(signIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
