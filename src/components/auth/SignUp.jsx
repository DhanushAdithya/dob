import React, { useState } from 'react'
import { Typography, Box } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'

export default () => {
	const [pass, setPass] = useState({
		pass: '',
		confirmPass: '',
		valid: false,
	})

	return (
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
						fullWidth
					/>
					<CheckCircleIcon
						color={
							pass.valid && pass.confirmPass !== '' ? 'primary' : 'error'
						}
						fontSize='large'
						style={{
							margin: 'auto 0',
							borderRadius: '30px',
							backgroundColor: '#ddda',
							padding: '5px',
							transition: '0.3s',
						}}
					/>
				</Box>
				<StyledSubmit
					type='submit'
					color='secondary'
					variant='outlined'
					disabled={!pass.valid}
				>
					Submit
				</StyledSubmit>
			</StyledFormPaper>
		</StyledFormContainer>
	)
}
