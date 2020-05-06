import { PatientsActionTypes } from './patients.types'

import { firestore } from '../../firebase/firestore'

export const setCurrentPatient = (currentPatient) => ({
  type: PatientsActionTypes.SET_CURRENT_PATIENT,
  payload: currentPatient,
})

export const fetchPatientsStart = () => ({
  type: PatientsActionTypes.FETCH_PATIENTS_START,
})

export const fetchPatientsSuccess = (patientsArray) => ({
  type: PatientsActionTypes.FETCH_PATIENTS_SUCCESS,
  payload: patientsArray,
})

export const fetchPatientsFailure = (errorMessage) => ({
  type: PatientsActionTypes.FETCH_PATIENTS_FAILURE,
  payload: errorMessage,
})

export const fetchPatientsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('patients')
    dispatch(fetchPatientsStart())

    collectionRef
      .get()
      .then((snapshot) => {
        const patientsList = snapshot.docs.map((doc) => doc.data())
        dispatch(fetchPatientsSuccess(patientsList))
      })
      .catch((error) => dispatch(fetchPatientsFailure(error.message)))
  }
}
