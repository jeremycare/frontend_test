import React, { Component } from 'react'

import './Popup.css'

export class Popup extends Component {
  /**
   * Step 3: Render a form and everything needed to be able to edit the popup
   */
  constructor() {
    super()
    this.state = {
      message: '',
    }
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
  }

  handleChangeMessage(e) {
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <span>New Popup Message :</span>
        <input
          value={this.state.message}
          placeholder="Popup Message"
          onChange={this.handleChangeMessage}
        />
      </div>
    )
  }
}
