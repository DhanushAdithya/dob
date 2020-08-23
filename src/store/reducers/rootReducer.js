import { authReducer } from '../reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
})

export default rootReducer
