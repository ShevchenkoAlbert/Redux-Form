import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import {  Field, reduxForm, FieldArray, Fields } from 'redux-form';
import { FormControl, Radio, Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import FormSelect from './select/Select';
import options from './select/options';



const validate = values => {
  const errors = {}
    // name
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 3 || values.name.length > 50) {
      errors.name = 'Must be more than 3 characters and less than 50 characters'
    }
    // email
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email isn\'t valid'
    }

    // password
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length > 1000) {
      errors.password = 'Must be 1000 characters or less'
    }

  return errors
}

const renderInput = ({ input, label, type, placeholder, id, meta: { touched, error} }) => (
  <div className="contain">
    <label  className="label-style" htmlFor={id}>{label}</label>
    <div className="input-style">
      <FormControl {...input} placeholder={placeholder} type={type} componentClass='input' id={id} />
      {touched && (error && <span  className="error">{error}</span>)}
    </div>
  </div>
)

const renderRadio = ({ input, label, type, id, meta: { touched, error} }) => (
  <div className="contain">
    <label className="label-style" htmlFor="radioGroup"> {label} </label>
    <Radio {...input} name="radioGroup" value="Male" label="Male" inline>  Male </Radio>
    <Radio {...input} name="radioGroup" value="Female" label="Female" inline>  Female </Radio>
  </div>
)
const renderInputFile = ({ input, label, type, placeholder, id, meta: { touched, error} }) => (
  <div className="contain">
    <label  className="label-style" htmlFor={id}>{label}</label>
    <div className="form-control input-file">
      <FormControl {...input} placeholder={placeholder} type={type} componentClass='input' id={id} />
      {touched && (error && <span  className="error">{error}</span>)}
    </div>
  </div>
)
const renderInputWithMask = ({ input, label, type, placeholder, id, meta: { touched, error} }) => (
  <div className="contain">
    <label className="label-style" htmlFor={id}>{label}</label>
    <div className="input-style">
      <InputMask
        className='inputs form-control'
        mask='99-99-9999'
        placeholder={placeholder}
        {...input}
      />
      {touched && (error && <span  className="error">{error}</span>)}
    </div>
  </div>
)

const renderContacts = ({ fields, meta: { touched, error, submitFailed }}) => {
  if(!fields.length) {
    fields.push({})
  }
  return (
    fields.map((contacts, index) => {
      return (
        <div className="contacts-row" key={index}>
          {
            (fields.length > 1) &&
            (<div>
              <button className="contact-remove" onClick={() => fields.remove(index)}></button>
            </div>)
          }
          <div className="contact-select">
            <Field 
              name="contact-select" 
              component={renderMultiSelect} 
              placeholder="contacts" 
              options={options.contacts}
              label="Contacts"
            />
          </div>
          <div className="contact-input">
            <Field 
              name="contact-input" 
              component={renderInput} 
              type="text" 
              placeholder="Add your contacts" 
              label="Contacts"
            />
          </div>         
        </div>
      )
    })
  )
}

const renderMultiSelect = ({ input, label, type, placeholder, id, options, meta: { touched, error} }) => (
  <div className="contain">
    <label className="label-style" htmlFor={id}>{label}</label>
    <div className="input-style">
      <FormSelect input={input} type={type} options={options} placeholder={placeholder} id={id} />
      {touched && (error && <span  className="error">{error}</span>)}
    </div>
  </div>
)

const renderTextArea = ({ input, label, type, placeholder, id, meta: { touched, error} }) => (
  <div className="contain">
    <label className="label-style" htmlFor={id}>{label} </label>
    <div className="input-style">
      <FormControl {...input} componentClass="textarea" placeholder={placeholder} type={type} id={id} />
      {touched && (error && <span  className="error">{error}</span>)}
    </div>
  </div>
)

const renderCheckbox = ({ input,  meta: { touched, error} }) => (
  <div className="checkbox-contain">
    <input {...input} type="checkbox" className='inputs' />
    <span> Agreement </span>
    <div>
      {touched && (error && <span className="error">{error}</span>)}
    </div>
  </div>
)






class FormPage extends Component {

  render() {
    return (
      <div className="formpage-wrapper">
        <form onSubmit>
          <div className="name_contain ">
            <Field 
              name="name" 
              component={renderInput} 
              type="text" placeholder="John Doe" 
              label="Name" 
              id="name" 
            />
          </div>
          <div className="email_contain ">
            <Field 
              name="email" 
              component={renderInput} 
              type="email" 
              placeholder="johndoe@examle.com" 
              label="Email" 
              id="email"
            />
          </div>
          <div className="password_contain ">
            <Field 
              name="password" 
              component={renderInput} 
              type="password" 
              placeholder="********" 
              label="Password" 
              id="password"
            />
          </div>
          <div className="gender_contain ">
            <Field 
              name="gender" 
              component={renderRadio} 
              type="radio" 
              label="Gender" 
              id="gender"
            />
          </div>
          <div className="bday_contain ">
            <Field 
              name="birthday" 
              component={renderInputWithMask} 
              type="text" 
              placeholder="01.01.2000" 
              label="Birthdate" 
              id="birthday" 
            />
          </div>
          <div className="contacts_contain ">
            <Fields names={[ 'selectedOption', 'contactvalue' ]} component={renderContacts} options={options.contacts}/>
          </div>
          <div className="file_contain ">
            <Field 
              name="file" 
              component={renderInputFile} 
              type="file"  
              label="Photo" 
              id="photo"
            />
          </div>
          <div className="hobbies_contain ">
            <Field 
              name="hobbies" 
              component={renderMultiSelect}
              options={options.hobbies} 
              placeholder='Choose your hobbies' 
              label="Hobbies"
              id="hobbies" 
            />
          </div>
          <div className="about_yourself_contain ">
            <Field 
              name="area" 
              component={renderTextArea} 
              placeholder='Some words about yourself' 
              label="Some words"
              id="area" 
              type="textarea"
            />
          </div>
          <div className="agreement_contain ">
            <Field name="agreed" component={renderCheckbox} />
          </div>
          <Button className="button-contain" bsStyle="primary" type="submit">Update profile</Button>
        </form>
      </div>
    )
  }
}
export default FormPage = reduxForm({
  form: 'FormPage', // a unique name for this form
  validate,
})(FormPage);