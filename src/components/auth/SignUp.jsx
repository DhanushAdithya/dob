import React, { useState } from 'react'
import { Typography, Box, ThemeProvider } from '@material-ui/core'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'

export default () => {
	const [pass, setPass] = useState({
		pass: '',
		confirmPass: '',
		valid: false,
	})

	return (
		<ThemeProvider theme={Formtheme}>
			<StyledFormContainer maxWidth='sm'>
				<StyledFormPaper component='form'>
					<Typography variant='h4' align='center'>
						Sign Up
					</Typography>
					<StyledTextField label='Name' fullWidth />
					<StyledTextField label='Email' type='email' fullWidth />
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
