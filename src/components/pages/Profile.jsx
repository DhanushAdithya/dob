import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import { StyledContainer, StyledPaper } from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'

export default () => {
	return (
		<ThemeProvider theme={Formtheme}>
			<StyledContainer maxWidth='sm'>
				<StyledPaper>
					<Typography variant='h4' align='center' children='Profile' />
				</StyledPaper>
			</StyledContainer>
		</ThemeProvider>
	)
}
