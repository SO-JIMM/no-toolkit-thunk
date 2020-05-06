import { createSelector } from 'reselect'

const selectPatients = (state) => state.patients
const selectCurrentPatient = (state) => state.currentPatient

export const patients = createSelector(
  [selectPatients],
  (patients) => patients.patients
)

export const currentPatient = createSelector(
  [selectCurrentPatient],
  (patients) => patients.currentPatient
)
