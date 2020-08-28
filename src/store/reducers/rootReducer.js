import { authReducer, monthReducer } from '../reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	month: monthReducer,
})

export default rootReducer
