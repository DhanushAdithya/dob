import React, { useState } from 'react'
import { Typography, Snackbar } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
	StyledTextField,
	StyledSubmit,
	StyledContainer,
	StyledPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { signIn } from '../../store/actions/authUser'

const SignIn = ({ signIn, redirect, auth, err }) => {
	const [user, setUser] = useState({ email: '', password: '' })
	const updateUser = e => setUser({ ...user, [e.target.id]: e.target.value })

	if (redirect) return <Redirect to='/' />
	if (auth) return <Redirect to='/' />

	return (
		<ThemeProvider theme={Formtheme}>
			<StyledContainer maxWidth='sm'>
				<StyledPaper
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
				</StyledPaper>
			</StyledContainer>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={err ? true : false}
				message={err}
			/>
		</ThemeProvider>
	)
}

const mapStateToProps = state => ({
	redirect: state.auth.redirect,
	err: state.auth.err,
	auth: state.firebase.auth.uid,
})

const mapDispatchToProps = dispatch => ({
	signIn: user => dispatch(signIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
