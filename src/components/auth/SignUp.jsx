import React from 'react'
import { Typography, Box } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'

export default () => {
	return (
		<StyledFormContainer maxWidth='sm'>
			<StyledFormPaper component='form'>
				<Typography variant='h4' align='center'>
					Sign Up
				</Typography>
				<StyledTextField label='Name' fullWidth />
				<StyledTextField label='Email' fullWidth />
				<StyledTextField label='Password' fullWidth />
				<Box display='flex'>
					<StyledTextField label='Confirm Password' fullWidth />
					<CheckCircleIcon
						color='primary'
						fontSize='large'
						style={{
							margin: 'auto 0',
							borderRadius: '30px',
							backgroundColor: '#ddda',
							padding: '5px',
						}}
					/>
				</Box>
				<StyledSubmit type='submit' color='secondary' variant='outlined'>
					Submit
				</StyledSubmit>
			</StyledFormPaper>
		</StyledFormContainer>
	)
}
