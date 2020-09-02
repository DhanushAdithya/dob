import React, { useState } from 'react'
import { Typography, Box, ThemeProvider } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { signUp } from '../../store/actions/authUser'

const SignUp = ({ signUp, redirect, auth, err }) => {
	const [user, setUser] = useState({ name: '', email: '' })
	const [pass, setPass] = useState({
		pass: '',
		confirmPass: '',
		valid: false,
	})
	const updateUser = e => setUser({ ...user, [e.target.id]: e.target.value })

	if (redirect) return <Redirect to='/' />
	if (auth) return <Redirect to='/' />

	return (
		<ThemeProvider theme={Formtheme}>
			<StyledFormContainer maxWidth='sm'>
				<StyledFormPaper
					component='form'
					onSubmit={e => {
						e.preventDefault()
						signUp({ ...user, password: pass.pass })
					}}
				>
					<Typography variant='h4' align='center'>
						Sign Up
					</Typography>
					<StyledTextField
						label='Name'
						id='name'
						onChange={updateUser}
						value={user.name}
						fullWidth
					/>
					<StyledTextField
						label='Email'
						id='email'
						onChange={updateUser}
						value={user.email}
						type='email'
						fullWidth
					/>
					<StyledTextField
						label='Password'
						type='password'
						value={pass.pass}
						onChange={e => {
							setPass({
								...pass,
								pass: e.target.value,
								valid: e.target.value === pass.confirmPass,
							})
						}}
						fullWidth
					/>
					<Box display='flex'>
						<StyledTextField
							label='Confirm Password'
							type='password'
							value={pass.confirmPass}
							onChange={e => {
								setPass({
									...pass,
									confirmPass: e.target.value,
									valid: e.target.value === pass.pass,
								})
							}}
							error={
								pass.confirmPass.length > 0 && !pass.valid
									? true
									: false
							}
							helperText={
								pass.confirmPass.length > 0 && !pass.valid
									? 'Passwords does not match'
									: ''
							}
							fullWidth
						/>
					</Box>
					<StyledSubmit
						color='primary'
						variant='outlined'
						disabled={!pass.valid}
					>
						Submit
					</StyledSubmit>
				</StyledFormPaper>
			</StyledFormContainer>
		</ThemeProvider>
	)
}

const mapStateToProps = state => ({
	redirect: state.auth.redirect,
	err: state.auth.err,
	auth: state.firebase.auth.uid,
})

const mapDispatchToProps = dispatch => ({
	signUp: user => dispatch(signUp(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
