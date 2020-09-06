import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const StyledHeading = styled(Typography)`
	font-family: 'Luckiest Guy', cursive;
`

export default () => {
	return (
		<div>
			<StyledHeading
				variant='h2'
				children='Welcome to DOB'
				align='center'
				style={{ color: '#f0db4f' }}
			/>
			<Typography
				style={{ color: 'white' }}
				children='Add your Date of Birth'
				align='center'
			/>
		</div>
	)
}
