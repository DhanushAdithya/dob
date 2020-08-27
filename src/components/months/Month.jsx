import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
	list-style-type: none;
	width: 30px;
	height: 30px;
	border-radius: 3px;
	background-color: #f0db4f;
	margin: 2px;
`

export default () => {
	return (
		<ul style={{ display: 'flex', flexWrap: 'wrap' }}>
			{Array.from({ length: 31 }, (v, i) => i + 1).map(e => {
				return <StyledList key={'J' + e}></StyledList>
			})}
		</ul>
	)
}
