import React, { Fragment } from 'react'
import { Tooltip } from '@material-ui/core'

import { StyledList, StyledUL } from '../../styles/styled'
import { SHADES } from '../../assets'

export default ({ month }) => {
	return (
		<StyledUL>
			{month.map((e, _) => (
				<Fragment key={`J${_}`}>
					<Tooltip
						title={`${e === 0 ? 'No' : e} DOB${e !== 1 ? 's' : ''}`}
						placement='top'
						arrow
					>
						<StyledList shade={SHADES[+e]}></StyledList>
					</Tooltip>
				</Fragment>
			))}
		</StyledUL>
	)
}
