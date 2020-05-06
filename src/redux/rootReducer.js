import { combineReducers } from 'redux'
import patientsReducer from './patients/patients.reducer'

const rootReducer = combineReducers({
  patients: patientsReducer,
})

export default rootReducer
