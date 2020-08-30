import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Month } from '../months'

const MonthContainer = ({ months }) => {
	return (
		<>
			{months &&
				months.map(data => <Month key={data.id} month={data.dates} />)}
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
