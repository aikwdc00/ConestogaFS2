import React, { Component } from 'react'

const selectOptions = ['All', 'FullTime', 'PartTime', 'Contract', 'Seasonal']
export default class EmployeeSearch extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
    }
  }

  _onChanged = (e) => {
    // console.log('e', e)
    this.setState({
      type: e.target.value
    }, () => this.props.onFilter(e.target.value))
  }

  render() {
    const { type } = this.state
    return (
      <div>
        <label htmlFor="search">Please choose employee Typ</label>
        <select name="" id="search" defaultValue={`Select a type.`} value={type} onChange={this._onChanged}>
          {selectOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>

        <button type="button">Search</button>
      </div>
    )
  }
}
