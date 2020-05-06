import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { patients } from '../redux/patients/patients.selectors'
import { fetchPatientsStartAsync } from '../redux/patients/patients.actions'

class PatientsPage extends React.Component {
  componentDidMount() {
    const { fetchPatientsStartAsync } = this.props

    fetchPatientsStartAsync()
  }

  render() {
    const { patients } = this.props
    return <div className="page patients-page"></div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPatientsStartAsync: () => dispatch(fetchPatientsStartAsync()),
})

const mapStateToProps = createStructuredSelector({
  patients: patients,
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage)
