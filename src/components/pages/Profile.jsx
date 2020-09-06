import React from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { StyledContainer, StyledPaper } from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { Details } from '../reusable'

const Profile = ({ user }) => {
	return (
		<ThemeProvider theme={Formtheme}>
			<StyledContainer maxWidth='sm'>
				<StyledPaper>
					<Typography variant='h4' align='center' children='Profile' />
					<Details name='Name' value={user.name} />
					<Details name='Email' value={user.email} />
					<Details name='Initials' value={user.initials} />
					<Details name='ID' value={user.id} />
					<Details
						name='Can you add a date?'
						value={
							!user.isAdded
								? 'Of course you can!'
								: 'It seems to be you already added a date, so unfourtunately no :( '
						}
					/>
				</StyledPaper>
			</StyledContainer>
		</ThemeProvider>
	)
}

const mapStateToProps = state => ({
	user: state.firebase.profile,
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
