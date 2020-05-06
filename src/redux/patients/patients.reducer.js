import { PatientsActionTypes } from './patients.types'

const INITIAL_STATE = {
  patients: null,
  currentPatient: null,
  isFetching: false,
  errorMessage: undefined,
}

const patientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PatientsActionTypes.FETCH_PATIENTS_START:
      return {
        ...state,
        isFetching: true,
      }
    case PatientsActionTypes.FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        patients: action.payload,
      }
    case PatientsActionTypes.FETCH_PATIENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case PatientsActionTypes.SET_CURRENT_PATIENT:
      return {
        ...state,
        currentPatient: action.payload,
      }
    default:
      return state
  }
}

export default patientsReducer
