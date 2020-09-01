import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Month } from '../months'
import { StyledMonthCont } from '../../styles/styled'

const MonthContainer = ({ months }) => {
	return (
		<StyledMonthCont>
			{months &&
				months
					.sort((a, b) => a.index - b.index)
					.map(data => (
						<Month key={data.id} month={data.month} dates={data.dates} />
					))}
		</StyledMonthCont>
	)
}

const mapStateToProps = state => ({
	months: state.firestore.ordered.months,
})

export default compose(
	connect(mapStateToProps, null),
	firestoreConnect([
		{
			collection: 'months',
		},
	])
)(MonthContainer)
