import React, { Fragment } from 'react'
import { Tooltip, Typography } from '@material-ui/core'

import { StyledMonthWrapper, StyledList, StyledUL } from '../../styles/styled'
import { SHADES } from '../../assets'

export default ({ month, dates }) => {
	return (
		<StyledMonthWrapper>
			<Typography style={{ color: '#f0db4f' }} variant='h5' align='center'>
				{month}
			</Typography>
			<StyledUL>
				{dates.map((e, _) => (
					<Fragment key={`J${_}`}>
						<Tooltip
							title={`${e === 0 ? 'No' : e} DOB${
								e !== 1 ? 's' : ''
							} on ${month.slice(0, 3) + ', ' + (+_ + 1)}`}
							placement='top'
							arrow
						>
							<StyledList shade={SHADES[+e]}></StyledList>
						</Tooltip>
					</Fragment>
				))}
			</StyledUL>
		</StyledMonthWrapper>
	)
}
