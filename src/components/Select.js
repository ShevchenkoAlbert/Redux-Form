import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FormSelect extends Component {

  onChange = (event) => {
    if (this.props.input.onChange && event != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
      this.props.input.onChange(event.value);
    } else {
      // Clear the input field
      this.props.input.onChange(null)
    }
  }

  onBlur = () => this.props.input.onBlur(this.props.input.value) 
  

  render() {
	  return (
      <Select
        clearable={false}
        searchable={false}
        value = { this.props.input ? this.props.input.value : '' }
        onChange={this.onChange}
        onBlur={this.onBlur}
        options={this.props.options}
        className='selectStyle'
        placeholder={this.props.placeholder}
      />
  	)
  }
}

export default FormSelect;