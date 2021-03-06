import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'email', 'sex' ]

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}

class WizardFormSecondPage extends Component {
  render() {
    const {
      fields: { email, sex },
      handleSubmit,
      previousPage
    } = this.props
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <div>
            <input type="email" placeholder="Email" {...email}/>
          </div>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
            </label>
          </div>
          {sex.touched && sex.error && <div>{sex.error}</div>}
        </div>
        <div>
          <button type="button" onClick={previousPage}>
            <i/> Previous
          </button>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    )
  }
}

WizardFormSecondPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'wizard',              
  fields,                      
  destroyOnUnmount: false,     
  validate                     
})(WizardFormSecondPage)