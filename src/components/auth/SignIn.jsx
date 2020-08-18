import React from 'react'
import { Typography } from '@material-ui/core'

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
					Sign In
				</Typography>
				<StyledTextField label='Email' fullWidth />
				<StyledTextField label='Password' fullWidth />
				<StyledSubmit type='submit' color='secondary' variant='outlined'>
					Login
				</StyledSubmit>
			</StyledFormPaper>
		</StyledFormContainer>
	)
}
