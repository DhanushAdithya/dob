import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Tooltip } from '@material-ui/core'

import { SHADES } from '../../assets'

const StyledList = styled.li`
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ shade }) => (shade ? shade : '#f8eda7')};
`

const StyledUL = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 25px);
	grid-template-rows: repeat(5, 25px);
	gap: 5px;
	list-style: none;
	margin: 0;
	padding: 0;
	margin-top: 30px;
	margin-left: 30px;
`

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
