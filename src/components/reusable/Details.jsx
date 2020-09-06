import React from 'react'
import { Typography } from '@material-ui/core'

import { StyledDetailCard } from '../../styles/styled'

export default ({ name, value }) => {
	return (
		<StyledDetailCard>
			<Typography children={name} color='textSecondary' />
			<Typography children={value} />
		</StyledDetailCard>
	)
}
