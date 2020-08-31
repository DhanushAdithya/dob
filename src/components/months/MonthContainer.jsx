import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Month } from '../months'

const MonthContainer = ({ months }) => {
	return (
		<>
			{months &&
				months
					.sort((a, b) => a.index - b.index)
					.map(data => (
						<Month key={data.id} month={data.month} dates={data.dates} />
					))}
		</>
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
