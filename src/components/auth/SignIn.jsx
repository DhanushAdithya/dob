import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import {
	StyledTextField,
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'

export default () => {
	return (
		<ThemeProvider theme={Formtheme}>
			<StyledFormContainer maxWidth='sm'>
				<StyledFormPaper component='form'>
					<Typography variant='h4' align='center'>
						Sign In
					</Typography>
					<StyledTextField label='Email' fullWidth />
					<StyledTextField label='Password' fullWidth />
					<StyledSubmit color='primary' variant='outlined'>
						Login
					</StyledSubmit>
				</StyledFormPaper>
			</StyledFormContainer>
		</ThemeProvider>
	)
}
